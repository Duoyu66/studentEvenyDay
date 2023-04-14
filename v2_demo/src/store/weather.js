import {reqWeather} from "@/api";

const state ={
    weatherObj:{}
}
const mutations={
    Weather(state,weatherObj){
        state.weatherObj=weatherObj
    }
}
const actions = {
    async getWeather({commit}){
        let result = await reqWeather();
        commit("Weather",result)
    }


}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}