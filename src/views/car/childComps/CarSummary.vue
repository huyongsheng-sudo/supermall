<template>
  <div class="carsummary">

    <div @click="selectGoods">
      <img v-if="selectall && flag && none" class="checkBox" src="../../../assets/img/common/check.png" />
      <img v-else class="checkBox" src="../../../assets/img/common/uncheck.png" />
    </div>
    <div class="selectall">全选</div>

    <div class="total">
      合计：<font>￥{{totalPrice}}</font>
    </div>

    <div class="settlement">去结算({{totalnum}})</div>
  </div>


</template>

<script>
  export default {
    name: "CarSummary",
    data() {
      return {
        selectall: true,
        myflag: this.flag
      }
    },
    props: {
      flag: {
        type: Boolean,
      }
    },
    computed: {
      totalPrice() {
        let sum = 0;
        // console.log(this.flag)
        for(let i of this.$store.state.carList) {
          if(i.checked) {
            sum += i.price*i.count;
          }
        }
        return sum.toFixed(2);
      },
      totalnum() {
        let num = 0;
        for(let i of this.$store.state.carList) {
          if(i.checked) {
            num++;
          }
        }
        return num;
      },
      none() {
        if(this.$store.state.carList.length == 0) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      selectGoods() {
        // console.log(this.myflag);
        this.selectall = !this.selectall;
        this.flag = !this.flag;
        if(this.selectall) {
          for(let i of this.$store.state.carList) {
            i.checked = true;
          }
          this.flag = true;
        } else {
          for(let i of this.$store.state.carList) {
            i.checked = false;
          }
          this.flag = false;
        }
      }


    }
  }
</script>

<style scoped>
  .carsummary {
    height: 40px;
    background-color: white;
    position: relative;
    z-index: 9;
    display: flex;
    margin-bottom: 49px;
  }

  .checkBox {
    border: 2px solid #666;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 2px;
  }

  .selectall {
    line-height: 40px;
    margin-left: 3px;
  }

  .total {
    line-height: 40px;
    margin-left: 30px;
  }

  .total font {
    color: var(--color-high-text);
  }

  .settlement {
    height: 40px;
    background-color: orange;
    color: white;
    line-height: 40px;
    width: 100px;
    text-align: center;
    position: absolute;
    right: 0;
  }

</style>



<!-- <template>
   <div class="carsummary">

     <div @click="selectGoods">
       <img v-if="isSelectAll" class="checkBox" src="../../../assets/img/common/check.png" />
       <img v-else class="checkBox" src="../../../assets/img/common/uncheck.png" />
     </div>
     <div class="selectall">全选</div>

     <div class="total">
       合计：<font>￥{{totalPrice}}</font>
     </div>

     <div class="settlement">去结算({{totalnum}})</div>
   </div>


 </template>

 <script>
   export default {
     name: "CarSummary",
     data() {
       return {
         selectall: true,
         isSelectAll: true
       }
     },
     props: {
       flag: {
         type: Boolean,
       }
     },
     computed: {
       totalPrice() {
         let sum = 0;
         // console.log(this.flag)
         for(let i of this.$store.state.carList) {
           if(i.checked) {
             sum += i.price*i.count;
           }
         }
         return sum.toFixed(2);
       },
       totalnum() {
         let num = 0;
         for(let i of this.$store.state.carList) {
           if(i.checked) {
             num++;
           }
         }
         return num;
       },
     },
     methods: {
       selectGoods() {
         this.selectall = !this.selectall;
         if(this.selectall) {
           for(let i of this.$store.state.carList) {
             i.checked = true;
           }
           this.isSelectAll = true;
         } else {
           for(let i of this.$store.state.carList) {
             i.checked = false;
           }
           this.isSelectAll = false;
         }
       }


     }
   }
 </script>

 <style scoped>
   .carsummary {
     height: 40px;
     background-color: white;
     position: relative;
     z-index: 9;
     display: flex;
     margin-bottom: 49px;
   }

   .checkBox {
     border: 2px solid #666;
     border-radius: 50%;
     width: 20px;
     height: 20px;
     margin-top: 10px;
     margin-left: 2px;
   }

   .selectall {
     line-height: 40px;
     margin-left: 3px;
   }

   .total {
     line-height: 40px;
     margin-left: 30px;
   }

   .total font {
     color: var(--color-high-text);
   }

   .settlement {
     height: 40px;
     background-color: orange;
     color: white;
     line-height: 40px;
     width: 100px;
     text-align: center;
     position: absolute;
     right: 0;
   }

 </style> -->
