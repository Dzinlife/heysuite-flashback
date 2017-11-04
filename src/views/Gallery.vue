<template lang="pug">
.view(:class='{fold: show_hotel_list}')
  .column-left
    .logo-area
      .logo(@click='open_hotel_list')
      hr.logo-hr
    HotelList(toggle_hotel_list='open_hotel_list')
  .column-right(@click='click_column_right')
    .column-right-wrapper
      Slider(":imgs"='gallery_imgs', ref='slider' v-if='gallery_transition' ":hotel_name"="hotels[hotel_index].name")
      div(":class"="{'hotel-info': true, close: !show_info_panel}", v-show="$route.path !== '/about'")
        .hotel-info-bar(@click='toggleInfoPanel')
          .hotel-info-scroller(ref='scroller')
            img.hotel-logo(":src"='hotels[hotel_index].logo')
            .chevron
            .hotel-content
              h1.hotel-name(v-html='hotels[hotel_index].name')
              .hotel-intro-text(v-html='hotels[hotel_index].intro_text')
              a.hotel-link(:href='hotels[hotel_index].link', target='_blank' @click="click_hotel_link" v-html='hotels[hotel_index].name')
      transition(name='fade', mode='out-in')
        template(v-if="$route.path === '/about'")
          .about-view
            .about-content
              p #[span HeySuite] 是一家创新型服务及管理公司。
              p 我们面向会员制用户提供奢侈酒店套房预订及入住管理服务，通过用户友好的互联网工具，专属的会员服务档案，打破酒店集团及会员权益的壁垒，拓展服务满意度的内涵与外延。
              p
                | 更多咨询，请发送邮件至:
                a(href='mailto:purchasing@heysuite.com') purchasing@heysuite.com
  .footer
    p Copyright © 2016 HeySuite. All rights reserved.

</template>


<script>

import hotels from '@/store/hotels'
import getTitle from '@/router/title'
import scrollfix from 'component-scrollfix'
import escape from 'vue-filters/escape'
import HotelList from './HotelList.vue'
import Slider from './Slider.vue'

export default {
  name: 'gallery',
  computed: {
    hotel_index () {
      var hotel_url_name = decodeURIComponent(this.$route.path.substr(1))
      var is_chinese_hotel_url = hotels.filter( hotel => {
        if(hotel.hotel_url_name === hotel_url_name){
          return true
        }else{
          return false
        }
      })[0]

      if(is_chinese_hotel_url){
        var hotel_id = is_chinese_hotel_url.id
      }else{
        var hotel_id = this.$route.path.match(/d_(\w+)/)
        if(hotel_id){
          hotel_id = this.$route.path.match(/d_(\w+)/)[1]
        }
      }

      return hotel_id || this.initialRandomIndex
    },
    gallery_imgs() {
      return this.hotels[this.hotel_index].gallery
    },
    show_hotel_list () {
      return this.$store.state.show_hotel_list
    }
  },
  mounted(){
    scrollfix(this.$refs.scroller)

    this.gallery_transition = false
    this.$nextTick( () => {
      this.gallery_transition = true
    })
    if(window.innerWidth <= 640){
      this.close_hotel_list()
    }
  },
  components: {
    HotelList,
    Slider
  },
  filters: {
    escape
  },
  methods:{
    toggleInfoPanel () {
      this.show_info_panel = !this.show_info_panel
    },
    open_hotel_list () {
      if(this.$route.path === "/about" && !this.show_hotel_list){
        this.$router.push("/")
      }else{
        this.$store.commit('switchHotelList', false)
        this.show_info_panel = false
      }
    },
    close_hotel_list () {
      this.$store.commit('switchHotelList', true)
    },
    click_column_right () {
      if(window.innerWidth >= 640) return
      if(this.$store.state.show_hotel_list === false){
        this.$store.commit('switchHotelList', true)
        this.show_info_panel = false
      }
    },
    routeChange () {
      this.show_info_panel = false
    },
    click_hotel_link () {
      if(typeof ga !== 'undefined' ){
        ga('send', 'event', 'click', 'hotel-link', document.title)
      }
    }
  },
  watch: {
    hotel_index () {
      this.gallery_transition = false
      this.$nextTick( () => {
        this.gallery_transition = true
      })
    },
    $route: 'routeChange'
  },
  data () {
    return {
      initialRandomIndex: hotels[Math.floor(Math.random() * hotels.length)].id,
      gallery_transition: true,
      in_browser: typeof window !== 'undefined',
      show_info_panel: false,
      // hotel_index: Number(this.$route.path.split("_")[1]),
      hotels: hotels.reduce( (prev, next, i, array) => {
        prev[next.id] = next
        return prev
      }, {}),
    }
  }
}

</script>

<style lang="stylus">

.fade-enter-active, .fade-leave-active
  transition all 1s ease

.fade-enter, .fade-leave-active
  opacity 0

.view
  height 100%
  min-height 540px
  display flex
  align-items stretch
  transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

  &.fold
    background-color #aaa
    .column-left
      width 0
      padding 0
    .column-right-wrapper
      top 0
      bottom 0
    .logo
      background-image url("../assets/logo_white_alt.png")

.column-right-wrapper
  background-color black

.column-left
  flex 0 0 auto
  width 240px
  box-sizing border-box
  transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
  display flex
  flex-direction column

@media(max-width: 640px)
  .view
    position relative
    .column-left
      width 0
      .list
        position static
      .list-scroller
        min-width auto
        width 100%
        bottom 0
        top 100px
        height auto
    .column-right-wrapper
      top 0
      bottom 0
    .column-right
      position absolute
      flex 0 0 100%
      transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
      transform-origin left
      transform translate3d(90%,0,0)
    &.fold
      .column-right
        transform translate3d(0,0,0)
.logo
  margin-left 40px
  margin-top 36px
  font-size 0
  color transparent
  height 80px
  width 149px
  display block
  background-image url("../assets/logo_alt.png")
  background-size auto 80px
  background-position left top
  background-repeat no-repeat
  z-index 10
  position relative
  cursor pointer
  transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
  transform-origin left
  &.in-borwser
    cursor pointer

.logo-hr
  border none
  height 1px
  background-color #ddd
  margin 0
  /*margin-top 36px*/
  margin-top -16px
  margin-left 40px
  width 148px
  box-shadow -60px 0 #ddd

.column-right
  height 100%
  width 100%
  position relative

.column-right-wrapper
  transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
  position absolute
  top 36px
  bottom 36px
  left 0
  right 0
  overflow  hidden

img.gallery-pic
  width 100%
  height 100%
  object-fit cover
  transition 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

.hotel-logo{
  margin-right 40px
  height 38px
  margin-top 12px
  object-fit contain
  object-position bottom
  max-width 112px
}

.hotel-name
  height 42px
  line-height 69px
  font-size 13px
  font-weight bold
  letter-spacing 1px
  margin-top 10px
  margin-bottom 4px
  position relative
  border-left 1px solid rgba(255,255,255,0)
  transition 0.3s ease-out
  border-left none
  padding-left 0
  &:after
    content ""
    bottom -12px
    position absolute
    height 1px
    left -280px
    right 0
    /*background-color rgba(255,255,255,0.4)*/


.chevron
  height 24px
  width 28px
  position absolute
  left 50%
  margin-left -14px
  top 6px
  opacity 0.7
  animation none
  transition 0.3s ease-out
  &:before, &:after
    content ""
    position absolute
    height 2px
    width 14px
    /*border-radius 1px*/
    top 50%
    margin-top -1px
    background-color rgba(255,255,255,1)
    transition 0.3s ease-out
  &:before
    transform-origin 120% center
    transform rotate(0deg)
    left 0
  &:after
    transform-origin -20% center
    transform rotate(0deg)
    right 0

@keyframes chevron {
  from {
    opacity 0.3
    transform translate3d(0,0,0)
  }

  to {
    opacity 0.8
    transform translate3d(0,-4px,0)
  }
}

.hotel-info
  position absolute
  bottom 0
  width 100%
  left 0
  height 0px
  color white
  transition 0.3s ease-out
  transform translate3d(0, 20px, 0)

  &.close
    height 60px
    transform translate3d(0, 0, 0)

    .hotel-name
      font-weight normal
      border-left 1px solid rgba(255,255,255,0.3)
      padding-left 40px
      line-height 69px

    .hotel-info-bar
      transform translate3d(0, 0, 0)

    .chevron
      animation chevron 1s ease-in-out infinite alternate
      top 0
      transform translate3d(0,0,0)
      &:before
        transform-origin 120% center
        transform rotate(-30deg)
        left 0
      &:after
        transform-origin -20% center
        transform rotate(30deg)
        right 0

.hotel-intro-text
  font-size 12px
  line-height 19px
  padding-top 6px
  padding-bottom 6px
  position relative
  margin-top 12px
  border-bottom 1px solid rgba(255,255,255,0.7)
  overflow-y scroll
  max-height 300px
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 0.1%,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 95%,
    rgba(0, 0, 0, 0) 99.5%,
    rgba(0, 0, 0, 1) 100%
  )

.hotel-info-bar
  padding 0 40px
  padding-bottom 40px
  backdrop-filter blur(5px)
  background-color rgba(169, 54, 36, 0.8)
  display flex
  transition 0.3s ease-out
  transform translate3d(0, -100%, 0)
  box-shadow 0 60px rgba(169, 54, 36, 0.8)

.hotel-info-scroller
  -webkit-overflow-scrolling: touch
  display flex
  flex 1


@media (orientation: portrait) and (max-width: 640px), (orientation: landscape) and (max-height: 640px)
  .view .hotel-info
    min-height none
    height 100%
    top -60px
    transform translate3d(0, 0, 0)
    .hotel-info-bar
      transition none
      padding 0
      box-sizing border-box
      transform translate3d(0, 60px, 0)
      padding-top 144px
      height 100%
    .hotel-logo
      display none
    .hotel-content
      flex 1
    .hotel-name
      border-left none
      padding-left 0
    .hotel-intro-text
      overflow-y visible
      max-height none
    .hotel-info-scroller
      padding 0 36px
      padding-bottom 20px
      overflow-y scroll
      display block
    .chevron
      left auto
      right 36px
      top 24px

    &.close
      transform translate3d(0, 100%, 0)
      .hotel-info-bar
        .hotel-info-scroller
          overflow-y visible
          display flex
          padding 0 16px
        padding-top 0
        transform translate3d(0, 0, 0)
      .hotel-logo
        display block
      .hotel-intro-text
        position absolute
        left 16px
        right 16px
      .hotel-name
        text-align right
      .chevron
        left auto
        right 16px
        top 4px
      a
        display none

@media (orientation: landscape) and (max-height: 640px)
  .view .hotel-info
    .hotel-info-scroller
      display flex
    &.close
      .hotel-intro-text
        position static

.hotel-content
  max-width 440px

.hotel-link
  bottom 10px
  width 200px
  height 36px
  display flex
  align-items center
  justify-content center
  color white
  text-decoration none
  border 1px solid white
  font-size 14px
  margin-top 20px

.hotel-link:hover
  background-color white
  color rgba(169, 54, 36, 0.8)

ul
  margin 0

.footer
  z-index -1
  position absolute
  bottom 0
  right 0
  line-height 40px
  font-size 12px
  padding-right 16px
  font-weight 300
  color #999
  height 36px
  transition 0.3s ease-out
  display flex
  align-items center

  img
    margin-left 16px
    float left
    height 16px
  p
    float left
    height 20px
    line-height 20px
    color #939393
    font-size 12px
    margin-left 6px

@media (max-width: 640px)
  .footer
    display none

.about-view
  position absolute
  top 10px
  bottom 10px
  left 10px
  right 10px
  background-color rgba(255,255,255, 0.95)
  display flex
  align-items center
  justify-content center
  padding 20px

@media (max-width: 640px)
  .about-view
    top 156px
    bottom 0
    left 0
    right 0


.about-content
  max-width 320px
  letter-spacing 3px
  line-height 22px
  font-size 14px
  color #777
  span
    letter-spacing 1px
  a
    letter-spacing 1px
    color #759ABA


</style>
