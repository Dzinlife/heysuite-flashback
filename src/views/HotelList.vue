<template lang="pug">
  .list
    .list-scroller(ref="scroller")
      li(@click="show_about_us", :class="{'about-us': true, focus: $route.path === '/about'}")
        router-link(:to="{path: '/about'}") 关于我们
      ul(v-for="groups in hotel_groups")
        label {{ groups[0].area }}
        template(v-for="hotel in groups")
          li(v-if="hotel.id == hotel_id" class="focus" @click="toggleHotelList")
            router-link(:to="{path: '/d_' + hotel.id}") {{ hotel.name.replace(hotel.area, '')}}
          li(v-else @click="toggleHotelList")
            router-link(:to="{path: '/d_' + hotel.id}") {{ hotel.name.replace(hotel.area, '')}}
</template>

<script>

import hotels from '@/store/hotels'
import scrollfix from 'component-scrollfix'

export default {
  name: 'hotel-list',
  methods: {
    toggleHotelList () {
      this.$store.commit('switchHotelList', !this.$store.state.show_hotel_list)
    },
    show_about_us () {
      if(window.innerWidth <= 640){
        this.toggleHotelList()
      }
    },
  },
  computed: {
    hotel_id(){
      return this.$route.path.split("_")[1]
    }
  },
  mounted(){
    scrollfix(this.$refs.scroller)
  },
  data () {
    
    var hotel_name_index = []
    const hotel_groups = hotels.reduce( (prev, next, array, i) => {
      if( hotel_name_index.indexOf(next.area) === -1 ){
        hotel_name_index.push(next.area)
        prev.push( [next] )
      }else{
        const i = hotel_name_index.indexOf(next.area)
        prev[i].push(next)
      }
      return prev

    }, [])


    return {
      hotels,
      hotel_groups
    }
  }
}

</script>

<style lang="stylus">

.list
  flex 1
  position relative
  .list-scroller
    padding-top 20px
    padding-left 40px
    padding-bottom 40px
    position absolute
    height 100%
    min-width 240px
    width 100%
    box-sizing border-box
    overflow-y scroll
    -webkit-overflow-scrolling: touch
  ul
    list-style none
    padding 0
    margin-top 16px
    color #9a9a9a
    font-size 14px
    label
      padding-bottom 10px
      line-height 52px
      border-bottom 1px solid #ddd
    li
      a
        display block
        text-decoration none
        color #9a9a9a
        line-height 26px
        &:hover
          color #F37138
      &.focus
        a
          color #F37138

@media(max-width: 640px)
  .list
    ul
      font-size 16px
      label
        padding-bottom 20px
        line-height 80px
        border-bottom 1px solid #ddd
      li
        a
         line-height 48px
         font-size 16px

li.about-us
  list-style none
  margin-bottom 10px
  height 40px
  border-bottom 1px solid #ddd
  display inline
  width 140px
  width 72px
  white-space nowrap
  letter-spacing 3px
  line-height 40px
  padding-bottom 6px
  a
    text-decoration none
    color #999
    font-size 14px
  &.focus
    a
      color #F37138

@media(max-width: 640px)
  li.about-us
    padding-bottom 16px
    a
      font-size 16px



</style>
