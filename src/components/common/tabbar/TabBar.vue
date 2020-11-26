<template>
    <div id="tab-bar">
      <!-- <div class="tab-bar-item">
        <img class="tab-bar-pic" src="../../assets/img/tabbar/home.png" />
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img class="tab-bar-pic" src="../../assets/img/tabbar/sort.png" />
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img class="tab-bar-pic" src="../../assets/img/tabbar/car.png" />
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img class="tab-bar-pic" src="../../assets/img/tabbar/my.png" />
        <div>我的</div>
      </div> -->

      <!-- 这个插槽如果不写的话，在App.vue里面就不能把tabbaritem组件加进去了 -->
      <slot></slot>
    </div>
</template>


<script>
  export default {
    name: 'TabBar',

  }
</script>

<style>
  #tab-bar {
    display: flex;
    justify-content: space-around;
    background-color: rgb(244,244,244);
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.2);
    position: fixed;
    
  }

.tab-bar-item {
    height: 49px;
    position: relative;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-pic {
    position: relative;
    top: 3px;
    height: 24px;
    width: 24px;
  }
</style>
