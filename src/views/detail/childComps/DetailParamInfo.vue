<template>
  <div id="itemParamsInfo">

    <div class="size">
      <div class="size-description">{{itemParamsInfo.ruleKey}}</div>
      <div class="size-detail" v-for="item in itemParamsInfo.tables">
        <div class="size-detail-item" v-for="it in item">
          <span v-for="i in it">{{i}} </span>
        </div>
      </div>
    </div>

    <div class="product">
      <div class="product-parameter">{{itemParamsInfo.infoKey}}</div>
      <div class="product-content">
        <div class="product-item" v-for="item in itemParamsInfo.set">
          <div class="item-key">{{item.key}}</div>
          <div class="item-value">{{item.value}}</div>
        </div>
      </div>

    </div>



  </div>
</template>

<script>
  export default {
    name: "itemParamsInfo",
    props: {
      itemParamsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #itemParamsInfo {
    margin-top: 30px;
  }

  .size {
    /* background-color: yellowgreen; */
  }

  .size-description {
    margin-left: 5%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 800;
    color: black;
  }

  .size-detail {
    /* background-color: yellow; */
    width: 90%;
    margin-left: 5%;
  }

  .size-detail-item {
    color: black;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(200,200,200);
  }

  .product {
    margin-top: 30px;
    /* background-color: yellowgreen; */
  }

  .product-parameter {
    font-size: 18px;
    font-weight: 800;
    color: black;
    margin-left: 5%;
  }

  .product-content {
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;
  }

  .product-item {
    /* position: relative; */
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(200,200,200);
  }

  .item-key {
    line-height: calc(100%);

    /* position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto; */


    width: 20%;
    /* background-color: skyblue; */
    color: black;
  }

  .item-value {
   /* position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto; */
    width: 80%;
    /* background-color: yellow; */
    margin-left: 20%;
    color: red;
  }

</style>
