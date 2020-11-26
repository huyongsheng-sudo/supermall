<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" :goodsitem="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    created() {
      // console.log(this.goods)
    }
  }
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
