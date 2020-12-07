import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
  state: {
    carList: []
  },
  // mutations为了修改state中的状态
  // mutations的每一个方法尽可能完成的事情比较单一一点
  mutations: {
    addCounter(state , payload) {
      payload.count++;
    },
    addNew(state , payload) {
      payload.checked = true;
      state.carList.push(payload);
    }
  },
  actions: {
    addCar(context , payload) {
      // 这个payload就是product
      return new Promise((resolve,reject) => {
        
        let oldProduct = null;
        for(let item of context.state.carList) {
          if(item.iid == payload.iid) {
            oldProduct = item;
          }
        }
        if(oldProduct) {
          // oldProduct.count++;
          context.commit('addCounter' , oldProduct);
          resolve("当前商品数量+1");
        } else {
          payload.count = 1;
          // state.carList.push(payload);
          context.commit('addNew' , payload);
          resolve("添加了新的商品");
        }
        // console.log(context.state.carList);
      })
    }
  }
})

// 挂载到vue实例上
export default store
