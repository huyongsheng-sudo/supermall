<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <slot v-if="!isActive" class="tab-bar-pic" name="tab-bar-icon"></slot> -->

    <div v-if="!isActive">
      <slot class="tab-bar-pic" name="tab-bar-icon"></slot>
    </div>

    <!-- <slot v-else class="tab-bar-pic" name="tab-bar-icon-active"></slot> -->

    <div v-else>
      <slot class="tab-bar-pic" name="tab-bar-icon-active"></slot>
    </div>
    <!-- 这样写，插槽会直接被替换class直接失效了，因此我们用一个div把这个包起来，class设置在div上 -->
    <!-- <slot v-bind:class="{active: isActive}" name="tab-bar-text"></slot> -->
    <!-- 这样就不会被替换掉了，class会起效果 -->

    <!-- 如果颜色要变，那么不能动态绑定class、，要动态绑定style -->
    <!-- <div v-bind:class="{active: isActive}">
      <slot name="tab-bar-text"></slot>
    </div> -->

    <div v-bind:style="activeStyle">
      <slot name="tab-bar-text"></slot>
    </div>



    <!-- <img class="tab-bar-pic" src="../../assets/img/tabbar/home.png" />
    <div>首页</div> -->
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'rgb(216,30,6)'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        // 不等于-1就是找到了
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        // 如果isActive是true那就传进来，不然给空的，就会渲染成红的
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path);
      }
    }
  }
</script>


<style>
  .tab-bar-item {
    height: 49px;
    position: relative;
    text-align: center;
    font-size: 14px;
    color: var(--color-text);
  }

  .tab-bar-pic {
    position: relative;
    top: 3px;
    height: 24px;
    width: 24px;
  }

  /* .active {
    color: activeColor;
  } */
</style>
