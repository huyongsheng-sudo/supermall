<template>
  <Swiper class="swiper-item">
    <SwiperItem v-for="item in swiperimages">
      <img :src="item" />
    </SwiperItem>
  </Swiper>

</template>

<script>
  import Swiper from 'components/common/swiper/Swiper.vue'
  import SwiperItem from 'components/common/swiper/SwiperItem.vue'
  export default {
    name: "DetailSwiper",
    props: {
      swiperimages: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swiper-item {
    height: 300px;
    overflow: hidden;
  }
</style>
