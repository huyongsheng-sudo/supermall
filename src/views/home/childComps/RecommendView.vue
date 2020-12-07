<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in chrecommends">
      <a :href="item.link">
        <img class="item-img" :src="item.image" @load="imgLoad"/>
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      chrecommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        // this.$bus.$emit('itemImageLoad');
        this.$bus.$emit('homeImageLoad');
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  /* .recommend-item {
    flex: 1;
  } */

  .item-img {
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
  }
  .item-text {
    text-align: center;
    font-size: 15px;
  }

</style>
