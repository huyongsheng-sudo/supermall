<template>
  <div class="buttom-bar">
    <div class="left">
      <div class="service" @click="serviceClick">
        <div class="pic">
          <img v-if="currentIndex!=0" src="../../../assets/img/buttombar/love.png" />
          <img v-else src="../../../assets/img/buttombar/service_active.png" />
        </div>

        <div :class="{textActive: currentIndex==0}">客服</div>
      </div>

      <div class="store" @click="storeClick">
        <div class="pic">
          <img v-if="currentIndex!=1" src="../../../assets/img/buttombar/store.png" />
          <img v-else src="../../../assets/img/buttombar/store_acive.png" />
        </div>

        <div :class="{textActive: currentIndex==1}">店铺</div>
      </div>

      <div class="love" @click="loveClick">
        <div class="pic">
          <img v-if="currentIndex!=2" src="../../../assets/img/buttombar/love.png" />
          <img v-else src="../../../assets/img/buttombar/love_active.png" />
        </div>

        <div :class="{textActive: currentIndex==2}">收藏</div>
      </div>
    </div>


    <div class="right">
      <div @click="addToCar" class="car">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailButtomBar",
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      serviceClick() {
        // console.log("serviceClick");
        this.currentIndex = 0;
      },
      storeClick() {
        // console.log("storeClick");
        this.currentIndex = 1;
      },
      loveClick() {
        // console.log("loveClick");
        this.currentIndex = 2;
      },
      addToCar() {
        this.$emit('addTocar');
      }
    }
  }
</script>

<style scoped>
  .buttom-bar {
    height: 49px;
    width: 100%;
    background-color: white;
  }

  .left {
    height: 100%;
    width: 50%;
    /* background-color: yellowgreen; */
    display: flex;
  }

  .right {
    height: 100%;
    width: 50%;
    display: flex;
  }

  .car {
    width: 50%;
    height: 100%;
    line-height: 49px;
    background-color: yellow;
    text-align: center;
    color: black;
  }

  .buy {
    width: 50%;
    height: 100%;
    line-height: 49px;
    background-color: var(--color-tint);
    text-align: center;
    color: white;
  }

  .service {
    width: 33.33%;
    /* background-color: yellowgreen; */
    text-align: center;
    font-size: 15px;
  }

  .store {
    width: 33.33%;
    /* background-color: skyblue; */
    text-align: center;
    font-size: 15px;
  }

  .love {
    width: 33.33%;
    /* background-color: khaki; */
    text-align: center;
    font-size: 15px;
  }

  .left img {
    width: 25px;
    height: 25px;
    /* margin-left: calc(50% - 25px); */
  }

  .pic {
    margin-top: 2px;
    width: 100%;
  }

  .textActive {
    color: var(--color-high-text);
  }

  /* .word {
    width: 100%;
    text-align: center;
  } */
</style>
