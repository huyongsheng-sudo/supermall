<template>
  <div v-show="show" class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      }
    },
    
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    color: white;
    background-color: rgba(0,0,0,.65);
  }
</style>
