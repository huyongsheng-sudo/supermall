<template>
  <div>
    <DetailNavBar :childContent="['商品' , '参数' , '评论' , '推荐']"></DetailNavBar>

    <DetailSwiper :swiperimages="topImages"></DetailSwiper>

    <DetailBaseInfo :good="good"></DetailBaseInfo>

    <DetailShopInfo :shop="shop"></DetailShopInfo>
    
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import {getMsg} from 'network/detail.js'
  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
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
          columns: []
        },
        shop: {
          name: null,
          logo: null,
          cSells: null,
          cGoods: null,
          score: []
        }
      }
    },
    created() {
      // console.log(this.$route);
      this.iid = this.$route.params.iid;
      this.getDetail();
      this.getShop();
    },
    methods: {
      getDetail() {
        getMsg(this.iid).then((res) => {
          // console.log(res);
          this.topImages = res.data.result.itemInfo.topImages;
          // console.log(this.topImages);
          this.good.desc = res.data.result.itemInfo.desc;
          this.good.lowPrice = res.data.result.itemInfo.lowPrice;
          this.good.lowNowPrice = res.data.result.itemInfo.lowNowPrice;
          this.good.discountDesc = res.data.result.itemInfo.discountDesc;
          this.good.columns = res.data.result.columns;
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
          console.log(this.shop);
        })
      }
    }
  }
</script>

<style scoped>

</style>
