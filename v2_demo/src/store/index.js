import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import weather from './weather'
import localData from "@/store/localData";
export default new Vuex.Store({
    modules:{
        weather,
        localData
    }
})