import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
Vue.use(VueRouter);
let router = new VueRouter({
    routes,
    //滚动行为
    // scrollBehavior(to,from,savedPosition){
    //     return {y:0};
    // }
})
export default router;