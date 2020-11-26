<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item , index) in titles" :class="{isActive: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return[];
        }
      }
    },
    components: {

    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        // console.log(index);
        this.currentIndex = index;
        // 把这个事件传递出去,在home组件中的TabControl中用@tabClick监听
        this.$emit('tabClick' , index);
      }
    }
  }
</script>

<style>
  .tabcontrol {
    display: flex;
    justify-content: space-evenly;
    height: 40px;
    line-height: 40px;
    font-size: ;
    background-color: white;
    position: relative;
    z-index: 1;
  }

  .isActive {
    color: var(--color-high-text);
    border-bottom: 3px var(--color-tint) solid;
  }
</style>
