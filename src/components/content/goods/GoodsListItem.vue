<template>
  <div v-if="goodsitem.show" class="goods-item" @click="goodsItemClick">
    <img :src="goodsitem.show.img" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>




  <div v-else class="goods-item" @click="goodsItemClick">
    <img :src="goodsitem.image" @load="imgLoad"/>
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
        // home里面不用监听详情页数据的发送

        // this.$bus.$emit('itemImageLoad');

        // home发home，detail发detail
        if(this.$route.path.indexOf('/home')) {
          this.$bus.$emit('homeImageLoad');
        } else if(this.$route.path.indexOf('/detail')) {
          this.$bus.$emit('detailImageLoad');
        }
      },
      goodsItemClick() {
        // console.log("跳转到详情页");
        // 因为在首页和详情页要来会跳转所以用push
        this.$router.push("/detail/" + this.goodsitem.iid);
      }
    },
    computed: {
      showImage() {
        if(goodsitem.show) {
          return this.goodsitem.show.img;
        } else {
          return this.goodsitem.image;
        }
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
