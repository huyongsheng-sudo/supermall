<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="goodsitem.show.img" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imgLoad() {
        // console.log("imgLoad");
        this.$bus.$emit('itemImageLoad');
      },
      goodsItemClick() {
        // console.log("跳转到详情页");
        // 因为在首页和详情页要来会跳转所以用push
        this.$router.push("/detail/" + this.goodsitem.iid);
      }
    }
  }
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 45%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.png') 0 0/14px 14px;
  }
</style>
