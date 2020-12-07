<template>
  <NavBar class="navbar">
    <div @click="goBack" slot="left">
      <img class="back" src="~assets/img/common/back.png" />
    </div>
    <div slot="center" class="center">
      <span :class="{isactive: index == currentIndex}"
      v-for="(item , index) in childContent"
      @click="titleClick(index)">{{item}}</span>
    </div>
  </NavBar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      childContent: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick' , index);
      },
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .navbar {
    position: relative;
  }
  .back {
    position: absolute;
    height: 30px;
    width: 30px;
    top: 0;
    bottom: 0;
    left: 15px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .center {
    display: flex;
    justify-content: space-evenly;
  }

  .isactive {
    color: var(--color-high-text);
    /* border-bottom: 1px solid var(--color-high-text); */
  }
</style>
