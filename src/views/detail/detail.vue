<template>
  <div id="detail">
    <DetailNavBar ref="navbar" @titleClick="titleClick" class="detailnavBar" :childContent="['商品' , '参数' , '评论' , '推荐']"></DetailNavBar>

    <Scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
      <DetailSwiper :swiperimages="topImages"></DetailSwiper>

      <DetailBaseInfo :good="good"></DetailBaseInfo>

      <DetailShopInfo :shop="shop"></DetailShopInfo>

      <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>

      <!-- 尽量用-分割命名，这样不会出问题 -->
      <DetailParamInfo ref="params" :item-params-info="itemParamsInfo"></DetailParamInfo>

      <DetailCommendInfo ref="commend" :commendInfo="commendInfo"></DetailCommendInfo>

      <GoodsList ref="recommend" :goods="recommends"></GoodsList>

    </Scroll>

    <BackTop v-show="isShow" @click.native="backTop" :probeType="3"></BackTop>

    <DetailButtomBar @addTocar="addTocar" class="detailbuttom"></DetailButtomBar>

    <Toast :message="message" :show="show"></Toast>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommendInfo from './childComps/DetailCommendInfo.vue'
  import DetailButtomBar from './childComps/DetailButtomBar.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'
  import Toast from 'components/common/toast/Toast.vue'
  import {
    getMsg,
    getRecommend
  } from 'network/detail.js'
  import {
    debounce
  } from 'common/utils.js'
  import {
    item
  } from 'common/mixin.js'
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommendInfo,
      GoodsList,
      DetailButtomBar,
      BackTop,
      Toast
    },
    data() {
      return {
        iid: null,
        topImages: [],
        good: {
          desc: null,
          lowPrice: null,
          lowNowPrice: null,
          discountDesc: null,
          columns: [],
          description: null
        },
        shop: {
          name: null,
          logo: null,
          cSells: null,
          cGoods: null,
          score: []
        },
        detailInfo: [],
        itemParamsInfo: {
          infoKey: null,
          set: [],
          ruleKey: null,
          tables: []
        },
        commendInfo: {
          cRate: 0,
          list: []
        },
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        isShow: false,
        message: '',
        show: false
      }
    },
    created() {
      // console.log(this.$route);
      this.iid = this.$route.params.iid;
      this.getDetail();
      this.getShop();
      this.getDetailInfo();
      this.getItemParams();
      this.getCommendInfo();
      this.getRecommend();


      // 防抖
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.themeTopYs);
      }, 100)




      // 这里值不对的原因，压根没有渲染
      // this.themeTopYs = [];

      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.themeTopYs);


      // this.$nextTick(() => {
      //   // 值不对的原因
      //   // 根据最新的数据渲染，DOM确实被渲染出来了
      //   // 但是图片没有加载完（）
      //   // offsetTop不对的时候，一般都是图片没加载完
      //   this.themeTopYs = [];

      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      //   console.log(this.themeTopYs);
      // })
    },
    mounted() {
      // const refresh = debounce(this.$refs.scroll.refresh , 500);
      // this.$bus.$on('imgLoad' , () => {
      //   // console.log(this.$refs.scroll.refresh);
      //   refresh();
      // })

      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on('detailImageLoad', () => {
        // console.log(this.$refs.scroll.refresh);
        refresh();

        // 但是这样写调用太过频繁，用防抖
        // this.themeTopYs = [];
        // this.themeTopYs.push(0);
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);


        // 这样写
        this.getThemeTopY();



      })
      // this.imgLoad();

    },
    updated() {
      // 在这里同样不行
      // this.themeTopYs = [];

      // this.themeTopYs.push(0);
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.commend.$el.offsetTop);
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.themeTopYs);
    },
    mixins: [item],
    methods: {
      getDetail() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.topImages = res.data.result.itemInfo.topImages;
          // console.log(this.topImages);
          this.good.desc = res.data.result.itemInfo.title;
          this.good.lowPrice = res.data.result.itemInfo.lowPrice;
          this.good.lowNowPrice = res.data.result.itemInfo.lowNowPrice;
          this.good.discountDesc = res.data.result.itemInfo.discountDesc;
          this.good.columns = res.data.result.columns;
          this.good.description = res.data.result.itemInfo.desc;
          // console.log(this.good);
        })
      },
      getShop() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.shop.name = res.data.result.shopInfo.name;
          this.shop.logo = res.data.result.shopInfo.shopLogo;
          this.shop.cSells = res.data.result.shopInfo.cSells;
          this.shop.cGoods = res.data.result.shopInfo.cGoods;
          this.shop.score = res.data.result.shopInfo.score;
          // console.log(this.shop);
        })
      },
      getDetailInfo() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.detailInfo = res.data.result.detailInfo.detailImage;
          // console.log(this.detailInfo);
        })
      },

      getItemParams() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.itemParamsInfo.infoKey = res.data.result.itemParams.info.key;
          this.itemParamsInfo.set = res.data.result.itemParams.info.set;
          this.itemParamsInfo.ruleKey = res.data.result.itemParams.rule.key;
          this.itemParamsInfo.tables = res.data.result.itemParams.rule.tables;
          // console.log(this.itemParamsInfo);
        })
      },

      getCommendInfo() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.commendInfo.cRate = res.data.result.rate.cRate;
          this.commendInfo.list = res.data.result.rate.list;
          // console.log(this.commendInfo);

        })
      },

      getRecommend() {
        getRecommend().then((res) => {
          // console.log(res);
          this.recommends = res.data.data.list;
          // console.log(this.recommends);
        })
      },

      titleClick(index) {
        // console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);

      },
      scroll(position) {
        // console.log(position);
        if(-position.y < 1000) {
          this.isShow = false;
        } else if(-position.y > 1000) {
          this.isShow = true;
        }

        if (-position.y < this.themeTopYs[1]) {
          // console.log("商品");
          this.$refs.navbar.currentIndex = 0;
        } else if (-position.y >= this.themeTopYs[1] && -position.y < this.themeTopYs[2]) {
          // console.log("参数");
          this.$refs.navbar.currentIndex = 1;
        } else if (-position.y >= this.themeTopYs[2] && -position.y < this.themeTopYs[3]) {
          // console.log("评论");
          this.$refs.navbar.currentIndex = 2;
        } else {
          // console.log("推荐");
          this.$refs.navbar.currentIndex = 3;
        }
      },
      backTop() {
        // console.log(this.$refs.scroll.$el.offsetTop);
        this.$refs.scroll.scrollTo(0,0,500);
      },
      // scrollBack(position) {
      //   console.log(position)
      //   if(-position.y < 1000) {
      //     this.isShow = false;
      //   } else {
      //     this.isShow = true;
      //   }
      // }
      addTocar() {
        // 获取购物车要展示的信息
        const product = {};
        product.iid = this.iid;
        product.image = this.topImages[0];
        product.title = this.good.desc;
        product.desc = this.good.description;
        product.price = this.good.lowNowPrice;
        // console.log(product);

        // 将商品添加到购物车,这个是到mutations
        // this.$store.commit('addCar' , product);


        // 将商品添加到购物车,这个是到actions
        // 再vuex里做了某个操作想让外面知道，这里就要用到Promise
        this.$store.dispatch('addCar' , product).then((res) => {
          console.log(res);
          this.message = res;
          this.show = true;

          setTimeout(() => {
            this.show = false;
          },1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: white;
    /* 这个100vh不写的话是滚不起来的，因为父元素是被撑高的 */
    height: 100vh;
  }

  .detailnavBar {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    /* 前面用的定位，这里直接计算 */
    height: calc(100% - 93px);
  }

  .detailbuttom {
    position: fixed;
  }
</style>
