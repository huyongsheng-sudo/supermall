<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

  }
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    /* 颜色不要再这里设置，在组件里面 */
   /* background-color: var(--color-tint);
    color: white; */
  }

  .left {
    width: 60px;
    /* background-color: rgb(254,104,123); */
  }

  .right {
    width: 60px;
    /* background-color: rgb(254,104,123); */
  }

  .center {
    /* 其他确定就他1，会把其余部分直接占据 */
    flex: 1;
    /* background-color: rgb(254,104,123); */
  }
</style>
