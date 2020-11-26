<template>
  <TabBar>

     <TabBarItem path="/home" activeColor="rgb(254,104,123)">
       <img class="tab-bar-pic" slot="tab-bar-icon" src="~assets/img/tabbar/home.png"></img>
       <img class="tab-bar-pic" slot="tab-bar-icon-active" src="~assets/img/tabbar/home_active.png"></img>
       <div slot="tab-bar-text">首页</div>
     </TabBarItem>

     <TabBarItem path="/sort" activeColor="rgb(254,104,123)">
       <img class="tab-bar-pic" slot="tab-bar-icon" src="~assets/img/tabbar/sort.png"></img>
       <img class="tab-bar-pic" slot="tab-bar-icon-active" src="~assets/img/tabbar/sort_active.png"></img>
       <div slot="tab-bar-text">分类</div>
     </TabBarItem>

     <TabBarItem path="/car" activeColor="rgb(254,104,123)">
       <img class="tab-bar-pic" slot="tab-bar-icon" src="~assets/img/tabbar/car.png"></img>
       <img class="tab-bar-pic" slot="tab-bar-icon-active" src="~assets/img/tabbar/car_active.png"></img>
       <div slot="tab-bar-text">购物车</div>
     </TabBarItem>

     <TabBarItem path="/my" activeColor="rgb(254,104,123)">
       <img class="tab-bar-pic" slot="tab-bar-icon" src="~assets/img/tabbar/my.png"></img>
       <img class="tab-bar-pic" slot="tab-bar-icon-active" src="~assets/img/tabbar/my_active.png"></img>
       <div slot="tab-bar-text">我的</div>
     </TabBarItem>

   </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    name: 'mainTabBar',
    components: {
      TabBar: TabBar,
      TabBarItem: TabBarItem
    }
  }
</script>

<style>
  
</style>
