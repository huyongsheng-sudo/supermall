<template>
  <div class="out-feature">
    <div class="feature">
      <div v-for="(i , index) in featureview">
        <a :href="i.link">
          <img class="item-pic" :src="i.image" @load="imgLoad"/>
          <div>{{i.title}}</div>
        </a>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'FeatureView',
    props: {
      featureview: {
        type: Array,
        default () {
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
  .feature {
    /* height: 120px; */
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .item-pic {
    height: 80px;
    width: 160px;
  }

  .out-feature {
    border-bottom: 8px solid #eee;
  }
</style>
