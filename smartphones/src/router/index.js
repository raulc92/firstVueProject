import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddDevice from '@/components/AddDevice'
import EditDevice from '@/components/EditDevice'

Vue.use(Router)

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
