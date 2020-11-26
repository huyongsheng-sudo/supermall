<template>
  <div>
    <div class="top">
      <img class="logo" :src="shop.logo" />
      <div class="name">{{shop.name}}</div>
    </div>

    <div class="total">

      <div class="sale">
        <div class="sale-item">
          <div class="describe-num">{{cSells}}</div>
          <div class="describe-text">总销量</div>
        </div>

        <div class="sale-item">
          <div class="describe-num">{{cGoods}}</div>
          <div class="describe-text">全部宝贝</div>
        </div>
      </div>

      <div class="msg">
        <div class="msg-item" v-for="item in shop.score">
          <span class="item-name">{{item.name}}</span>

          <span v-if="item.isBetter" class="item-score-true">{{item.score}}</span>
          <span v-else class="item-score-false">{{item.score}}</span>

          <span v-if="item.isBetter" class="item-height-true">
            <div class="high">高</div>
           </span>
          <span v-else class="item-height-false">
            <div class="low">低</div>
           </span>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      cSells() {
        if(this.shop.cSells >= 10000) {
          return (this.shop.cSells/10000).toFixed(1) + '万';
        } else {
          return this.shop.cSells;
        }
      },
      cGoods() {
        if(this.shop.cGoods >= 10000) {
          return (this.shop.cGoods/10000).toFixed(1) + '万';
        } else {
          return this.shop.cGoods;
        }
      }
    }
  }
</script>

<style scoped>
  .total {
    display: flex;
    /* background-color: orange; */
    height: 100px;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-left: 2%;
  }

  .top {
    margin-top: 10px;
    height: 50px;
    position: relative;
  }

  .name {
    position: absolute;
    top: 18px;
    left: 80px;
    font-size: 16px;
    /* margin-top: -20px; */
  }

  .sale {
    margin-top: 20px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    border-right: 2px solid rgb(100,100,100);
    /* background-color: greenyellow; */
    height: 60px;
  }

  .sale-item {
    /* background-color: red; */
  }



  .describe-text {
    margin-top: 10px;
    text-align: center;
  }

  .describe-num {
    text-align: center;
    font-size: 20px;
  }

  .msg {
    height: 100px;
    /* background-color: yellow; */
    width: 50%;
  }

  .item-height-true {
    margin-right: 5%;
    /* line-height: 33.3px;
    height: 33.3px; */
    /* background-color: red; */
    color: white;
  }

  .item-height-false {
    margin-right: 5%;
    /* line-height: 33.3px;
    height: 33.3px; */
    /* background-color: green; */
    color: white;
  }

  .item-name {
    margin-left: 5%;
    line-height: 33.3px;
    height: 33.3px;
  }

  .item-score-true {
    color: red;
    line-height: 33.3px;
    height: 33.3px;
  }

  .item-score-false {
    color: green;
    line-height: 33.3px;
    height: 33.3px;
  }

  .msg-item {
    display: flex;
    justify-content: space-between;
  }

  .high {
    margin-top: 8px;
    /* height: 20px; */
    background-color: red;
  }

  .low {
    margin-top: 8px;
    /* height: 20px; */
    background-color: green;
  }

</style>
