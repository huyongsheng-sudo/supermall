<template>
  <div>
    <div class="content" v-for="(item , index) in $store.state.carList">
      <div @click="innerClick(index)" class="inner">
        <div class="checkBox">
          <img v-if="$store.state.carList[index].checked" src="../../../assets/img/common/check.png" />
          <img v-else />
        </div>
        <img :src="$store.state.carList[index].image" />
        <div class="title">{{$store.state.carList[index].title}}</div>
        <div class="desc">{{$store.state.carList[index].desc}}</div>
        <div class="tariff">￥{{$store.state.carList[index].price}}</div>
        <div class="count">x{{$store.state.carList[index].count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarItem",
    methods: {
      innerClick(index) {
        this.$store.state.carList[index].checked = !this.$store.state.carList[index].checked;

        let flag = true;
        for(let i of this.$store.state.carList) {
          if(!i.checked) {
            flag = false;
            break;
          }
        }
        // console.log(flag);

        this.$emit('all' , flag);
      }
    }
  }
</script>

<style scoped>

  .content {
    border-bottom: 1px solid black;
  }

  .content img {
    margin-left: 5%;
    width: 20%;
    height: 25%;
    border-radius: 5%;
  }

  .inner {
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
  }

  .title {
    width: 65%;
    font-size: 16px;
    color: black;
    position: absolute;
    top: 5%;
    left: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .desc {
    width: 65%;
    font-size: 14px;
    position: absolute;
    top: 40%;
    left: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tariff {
    color: var(--color-high-text);
    position: absolute;
    left: 30%;
    top: 70%;
    font-size: 20px;
  }

  .count {
    position: absolute;
    left: 90%;
    top: 70%;
    font-size: 20px;
    color: black;
  }

  .checkBox img {
    border: 2px solid rgb(100,100,100);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    width: 14px;
    height: 14px;
    margin-left: 2px;
  }
</style>
