<template>
  <div class="DetailGoodsInfo">
    <div v-for="item in detailInfo">
      <div class="key">{{item.key}}</div>
      <img @load="imgLoad" class="image" v-for="i in item.list" :src="i" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        // this.$bus.$emit('imgLoad');
        
        this.$bus.$emit('detailImageLoad');
      }
    }
  }
</script>

<style scoped>
  .DetailGoodsInfo {
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid #eee;
  }

  .key {
    margin-left: 8%;
    margin-bottom: 15px;
  }

  .image {
    width: 90%;
    margin-left: 5%;
  }
</style>
