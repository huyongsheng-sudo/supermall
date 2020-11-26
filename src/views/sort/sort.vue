<template>
  <div>
    <div class="wrapper">
      <ul class="contnet">
        <button @click="btnClick">按钮</button>
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表</li>
        <li>商品列表97</li>
        <li>商品列表98</li>
        <li>商品列表99</li>
        <li>商品列表100</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Sort',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper') , {
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('scroll' , (position) => {
        // console.log(position);
      })

      this.scroll.on('pullingUp' , () => {
        console.log("上拉加载更多");
      })
    },
    methods: {
      btnClick() {
        console.log("btnClick");
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: red;
    /* background-color: red; */
    /* overflow-y: scroll; */

    /* 如果设置overflow：hidden就可以实现滚动了 */
    /* overflow: hidden; */
  }
</style>
