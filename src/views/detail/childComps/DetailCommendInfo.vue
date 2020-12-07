<template>
  <div id="commend">
    <div class="commend-user">
      <span>用户评价</span>
      <span>更多</span>
    </div>

    <div class="noData" v-if="commendInfo.cRate <= 0">
      暂无数据
    </div>

    <div v-else>
      <div class="information">
        <img :src="commendInfo.list[0].user.avatar" />
        <span>{{commendInfo.list[0].user.uname}}</span>
      </div>

      <div class="content">{{commendInfo.list[0].content}}</div>
      <div class="created-style">
        <span>{{commendInfo.list[0].created | showDate}}</span>
        <span class="style">{{commendInfo.list[0].style}}</span>
      </div>
      <div class="img">
        <img class="content-img" v-for="item in commendInfo.list[0].images" :src="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'
  export default {
    name: "DetailCommendInfo",
    props: {
      commendInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    // 过滤器，过滤时间
    filters: {
      showDate(value) {
        // 将时间戳转成Date对象
        const date = new Date(value * 1000);
        // 直接过滤
        return formatDate(date , 'yyyy:MM:dd hh:mm:ss');
      }
    }
  }
</script>

<style scoped>
  #commend {
    margin-top: 40px;
  }

  .commend-user {
    width: 90%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 2px solid rgb(215, 215, 215);
    border-bottom: 1px solid rgb(215, 215, 215);
  }

  .information {
    display: flex;
    margin-left: 5%;
    margin-top: 20px;
    align-items: center;
  }

  .information img {
    height: 60px;
    width: 60px;
  }

  .information span {
    margin-left: 20px;
  }

  .content {
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;
  }

  .created-style {
    width: 90%;
    margin-left: 5%;
  }

  .style {
    margin-left: 20px;
  }

  .img {
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;
  }

  .content-img {
    margin-right: 10px;
    height: 60px;
  }

  .noData {
    width: 90%;
    margin-left: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
