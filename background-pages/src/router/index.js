
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        name: 'SearchList',
        path: '/searchlist',
        component: () => import('@/SearchList/')
    }, {
        name: 'ShowImages',
        path: '/showimages',
        component: () =>
            import('@/ShowImages/')
    }, {
        name: 'UseModal',
        path: '/usemodal',
        component: () =>
            import('@/UseModal/')
    }, {
        name: 'UseInput',
        path: '/useinput',
        component: () =>
            import('@/UseInput/')
    }, {
        name: 'DynamicForm',
        path: '/dynamicform',
        component: () =>
            import('@/DynamicForm/')

    }
]

let router = new VueRouter({
    routes
})

export default router