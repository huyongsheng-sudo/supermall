<template>
  <NavBar class="navbar">
    <div class="center" slot="center">
      购物车({{carLength}})
    </div>
  </NavBar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: "CarNavBar",
    components: {
      NavBar
    },
    computed: {
      carLength() {
        let num = 0;
        for(let i of this.$store.state.carList) {
          if(i.checked) {
            num++;
          }
        }
        return num;
      }
    },
  }
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
    position: relative;
    z-index: 9;
  }

  .center {
    color: white;
    font-size: 18px;
    font-weight: 400;
  }
</style>
