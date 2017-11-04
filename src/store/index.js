import Vue from 'vue'
import Vuex from 'vuex'
import hotels from './hotels'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    show_hotel_list: false
  },
  mutations: {
    switchHotelList: (state, if_show) => {
      state.show_hotel_list = if_show
    },
  },
})

export default store
