import Vue from 'vue'
import Router from 'vue-router'
import hotels from '@/store/hotels'
import Gallery from '@/views/Gallery.vue'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Gallery },
    { path: '/:hotel_route', component: Gallery },
    { path: '/about', component: Gallery },
  ]
})

router.beforeEach((to, from, next) => {

  if( typeof window !== 'undefined'){

    var hotel_url_name = decodeURIComponent(to.path.substr(1))
    var is_chinese_hotel_url = hotels.filter( hotel => {
      if(hotel.hotel_url_name === hotel_url_name){
        return true
      }else{
        return false
      }
    })[0]


    if(to.path === "/"){
      document.title = "HeySuite - 身之所居，心之所栖"
    }else if(to.path === "/about"){
      document.title = "HeySuite - 关于我们"
    }else{
      if(is_chinese_hotel_url){
        var hotel_id = is_chinese_hotel_url.id
      }else{
        var hotel_id = to.path.match(/d_(\w+)/)[1]
      }

      document.title = `HeySuite - ${hotels.normal[hotel_id].name}`
    }
  }

  next()
})

export default router
