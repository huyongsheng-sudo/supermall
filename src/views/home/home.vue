<template>
  <div id="home">
    <NavBar class="home-nav">
      <div class="center" slot="center">购物街</div>
    </NavBar>

    <TabControl v-show="isTabFixed" ref="tabControl1" @tabClick="tabClick" :titles="['流行' , '新款' , '精选']"></TabControl>
    <!-- v-bind把banners直接传到子组件里 -->
    <!-- 这里如果不加:我们传的时候，无论写了什么就会被认为是字符串，加了就知道是数字了 -->
    <Scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="loadMore">
      <HomeSwiper class="homeswiper" :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>

      <RecommendView :chrecommends="recommends"></RecommendView>

      <FeatureView :featureview="banners"></FeatureView>

      <TabControl ref="tabControl2" @tabClick="tabClick" :titles="['流行' , '新款' , '精选']"></TabControl>

      <!-- 现在的缺点是太长了，我们可以搞一个计算属性 -->
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>

    <BackTop @click.native="topClick" v-show="isShowBackTop"></BackTop>



    <!-- <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </SwiperItem>
    </Swiper> -->

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  import TabControl from 'components/content/tabcontrol/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'
  import {debounce} from 'common/utils.js'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        keywords: [],

        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },
        currentType: 'pop',
        isShowBackTop: false,
        taboffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    // 组件创建完再去请求数据，要用生命周期函数
    created() {
      // 1.请求多个数据,封装到了methods里面
      this.getHomeMultidata();
      // 因为是异步操作，在上面函数还没执行完的时候，就来这里打印了，所以这里的数据是空的
      // console.log(this.banners);

      // 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted() {
      // 图片加载完成事件监听
      const refresh = debounce(this.$refs.scroll.refresh , 500);
      this.$bus.$on('homeImageLoad' , () => {
        // console.log(this.$refs.scroll.refresh);
        refresh();
      })
    },
    destroyed() {
      console.log("Home被销毁");
    },
    activated() {
      // 0秒迅速滚到底部
      this.$refs.scroll.scrollTo(0 , this.saveY , 0);
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y;
      this.$refs.scroll.refresh();
    },
    methods: {
      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then((res) => {
          // console.log(res);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          this.keywords = res.data.data.keywords.list;
          // console.log(res);
        })
      },
      getHomeGoods(type) {
        // 页数是当前的页数加1
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then((res) => {
          // 不能这样写，必须用[]的形式调用
          // this.goods.type.list = res.data.data.list;
          // 也不能这样写，不然直接后面的把前面请求的覆盖了
          // this.goods[type].list = res.data.data.list;
          // 用push方法
          // for(let i = 0 ; i < res.data.data.list.length ; i++) {
          //   this.goods[type].list.push(res.data.data.list[i]);
          // }
          // 上面push方法的简写,等价
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          // 完成上拉加载更多
          this.$refs.scroll.finishPullUp();

          // console.log(this.goods[type].list);
        })
      },
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        if (index == 0) {
          this.currentType = 'pop';
        } else if (index == 1) {
          this.currentType = 'new';
        } else {
          this.currentType = 'sell';
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      topClick() {
        // console.log(this.$refs.scroll.scroll);
        // 在500ms回到0，-44这个地方
        this.$refs.scroll.scrollTo(0,0,500);
      },
      contentScroll(position) {
        // console.log(position);
        // 判断BackTop是否显示
        if(position.y < -1000) {
          this.isShowBackTop = true;
        } else {
          this.isShowBackTop = false;
        }

        // 决定TabControl是否吸顶（position：fixed）
        if(-position.y > this.taboffsetTop) {
          this.isTabFixed = true;
        } else {
          this.isTabFixed = false;
        }
      },
      loadMore() {
        // console.log("加载更多");
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() {
        // 获取tabControl的offsetTop
        // 所有属性都有一个属性$el：用于获取组件中的元素
        // console.log(this.$refs.tabControl2.$el.offsetTop);
        this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }

    },


  }
</script>

<style scoped>
  .center {
    /* 直接在上一层写更好 */
    /* text-align: center; */
  }

  #home {
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    /* 如果设置了width那就不用left和right了 */
    /* width: 100%; */
  }

  .homeswiper {
    /* margin-top: 44px; */
  }

  .tabcontrol {
    position: sticky;
    top: 44px;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
  }



</style>
