<template>
  <div>
    <div>
      <p class="desc">{{good.desc}}</p>
      <div class="info">
        <span class="lownowprice">￥{{good.lowNowPrice}}</span>
        <span class="lowprice">￥{{good.lowPrice}}</span>
        <span class="discountdesc">{{good.discountDesc}}</span>
      </div>

      <div class="columns-info">
        <span v-for="item in good.columns">{{item}}</span>
      </div>
    </div>

    <div class="promise">
      <!-- <span><img src="~assets/img/common/right.png" />退货补运费</span>
      <span><img src="~assets/img/common/right.png" />全国包邮</span>
      <span><img src="~assets/img/common/right.png" />7天无理由退货</span> -->
      <font class="iconfont">&#xe605;退货补运费</font>
      <font class="iconfont">&#xe605;全国包邮</font>
      <font class="iconfont">&#xe605;7天无理由退货</font>
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      good: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
<style scoped>
@import url("../../../iconfont/iconfont.css");
  .desc {
    font-size: 18px;
    font-weight: 700;
    margin-top: 15px;
    width: 96%;
    margin-left: 2%;
  }

  .info {
    margin-top: 15px;
    position: relative;
  }

  .lownowprice {
    font-size: 25px;
    color: var(--color-high-text);
    margin-left: 2%;
  }

  .lowprice {
    margin-left: 2%;
    font-size: 15px;
    text-decoration: line-through;
  }

  .discountdesc {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    margin-left: 5%;
    background-color: var(--color-tint);
    border-radius: 6px;
    font-size: 15px;
    color: white;
    position: absolute;
    top: -5px;
  }

  .columns-info {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    width: 96%;
    margin-left: 2%;
  }

  .promise {
    width: 96%;
    margin-left: 2%;
    line-height: 80px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #eee;
    margin-top: 5px;
    border-bottom: 5px solid #eee;
  }

  .promise img {
    height: 20px;
    width: 20px;
  }
</style>
