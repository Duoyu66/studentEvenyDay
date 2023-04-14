import {reqJson} from "@/api";

const state = {
   localData:[],
   //查询的数据
   searchData:[],
   flags:true
}
const mutations = {
   GETLOCALDATA(state,localData){
      state.localData = localData
   },
   searchDATA(state,searchData){
      state.searchData = searchData
   }
}
const actions = {
   async getLocalData({commit}){
      let result = await reqJson();
      console.log("我是result",result)
      commit('GETLOCALDATA',result)
   }
}
const getters = {}
export default{
   state,
   mutations,
   actions,
   getters
}