import demoTwo from "@/pages/demoTwo/index.vue";
import demoOne from "@/pages/demoOne/index.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default [
    {
        path: '/demoOne',
        name: 'demoOne',
        component: demoOne
    },
    {
        path:'/demoTwo',
        name: 'demoTwo',
        component: demoTwo
    },
    {
        path:'/hello',
        name:'hello',
        component: HelloWorld
    }
    ,

{
    path:'/',
    redirect:demoOne
}
]