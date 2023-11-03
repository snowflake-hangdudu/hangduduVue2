//纯写着玩的vuex
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)


const state={
   name:'hangdudu',
   age:22,
   gender:'man',
   info:{
    message:'我是个人'
   }

}

const mutations={
  changeName: state => {
    state.name = 'SS'
  },
  changeAge: state => {
    state.age = state.age - 1
  },
  changeGender: state => {
    state.gender = 'woman'
  },
  changeInfo: state => {
    state.info.message = '你不是个人'
  }



}

const actions={
  changeName({commit}){
    commit("changeName")
  },
  changeAge({commit}){
    commit("changeAge")
  },
  changeGender({commit}){
    commit("changeGender")
  },
  changeInfo({commit}){
    commit("changeInfo")
  }
}

export default{
  namespaced: true,
  state,
  mutations,
  actions
}
