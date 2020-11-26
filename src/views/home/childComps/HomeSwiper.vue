<template>
  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad"/>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {
    getHomeMultidata
  } from 'network/home.js'
  import Swiper from 'components/common/swiper/Swiper.vue'
  import SwiperItem from 'components/common/swiper/SwiperItem.vue'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      imgLoad() {
        // console.log("-----");
        this.$bus.$emit('itemImageLoad');
        if(!this.isLoad) {
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }
      }
    }
    // data() {
    //   return {
    //     banners: [],
    //     recommends: [],
    //   }
    // },
    // // 组件创建完再去请求数据，要用生命周期函数
    // created() {
    //   // 1.请求多个数据
    //   getHomeMultidata().then((res) => {
    //     // console.log(res);
    //     this.banners = res.data.data.banner.list;
    //     this.recommends = res.data.data.recommend.list;
    //     console.log(this.banners);
    //   })
    //   // 因为是异步操作，在上面函数还没执行完的时候，就来这里打印了，所以这里的数据是空的
    //   // console.log(this.banners);
    // }
  }
</script>

<style>
</style>
