<template>
  <div class="backtop">
    <img src="~assets/img/common/backtop.png" />
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    data() {
      return {
        isShow: 'none'
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .backtop {
    position: fixed;
    z-index: 999;
    right: 8px;
    bottom: 55px;
  }
  .backtop img {
    height: 50px;
    width: 50px;
  }
</style>
