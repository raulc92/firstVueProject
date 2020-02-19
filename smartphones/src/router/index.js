import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddDevice from '@/components/AddDevice'
import EditDevice from '@/components/EditDevice'
//import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
//Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-device',
      name: 'AddDevice',
      component: AddDevice
    },
    {
      path: '/edit-device/:device_slug',
      name: 'EditDevice',
      component: EditDevice
    }
  ]
})
