<template>
  <div class="car">

    <CarNavBar></CarNavBar>

    <Scroll class="sheight">
      <CarItem @all="all"></CarItem>
    </Scroll>

    <CarSummary :flag="flag"></CarSummary>

  </div>
</template>

<script>
  import CarNavBar from './childComps/CarNavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import CarItem from "./childComps/CarItem.vue"
  import CarSummary from './childComps/CarSummary.vue'
  export default {
    name: 'Car',
    components: {
      CarNavBar,
      Scroll,
      CarItem,
      CarSummary
    },
    data() {
      return {
        flag: true
      }
    },
    methods: {
      all(flag) {
        this.flag = flag;
      }
    }
  }
</script>

<style scoped>
  .car {
    height: 100vh;
  }

  .sheight {
    height: calc(100% - 44px - 49px - 40px);
  }

</style>
