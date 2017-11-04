<template lang="pug">
.slider(ref="slider")
  .slider-wrapper(ref="slider_wrapper")
    Spinner(:show="loadingStatus[index] === false" ":v-if"="in_browser")
    transition(name='fade', mode='out-in' v-for="(img, i) in imgs", :key="i")
      img.img(
        :src="!in_browser || loadingStatus[i] ? img : ''"
        ":ref"="`img_${i}`"
        v-show!="i === index && loadingStatus[i]"
        ":alt"="hotel_name"
      )
    img.img(ref="loading_img" style="opacity: 0" ":src"="loading_img_src" @load='loaded' ":v-if"="in_browser")
  .slider-control-cover(ref="sliderControlCover" @touchstart="pauseMotion" @touchend="resumeMotion" @mousedown="pauseMotion" @mouseup="resumeMotion" @mousemove="pointerMove" @touchmove="pointerMove")
  .imgs-nav-wrapper(:v-if="in_browser")
    .imgs-nav-cell-click-area(v-for="(img, i) in imgs" @click.stop="click_nav_cell(i)", :key="i")
      .imgs-nav-cell
        - var html = '<div class="imgs-nav-cell-progress" :style="{transform: `translate3d(${ i < index ? 0 : i === index ? (progress - 1) * 100 : -100}%,0,0)`}"/>'
        | !{html}
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'slider',
  props: ["imgs", "hotel_name"],
  components: {
    Spinner
  },
  mounted(){

  },
  destroyed(){
    clearInterval(this.timer_even)
    clearInterval(this.timer_odd)
  },
  beforeDestroy(){
    // clearInterval(this.timer_even)
    // clearInterval(this.timer_odd)
  },
  watch: {
    index: function(){
      this.startMotion()
    },
    loading_index: function(){
      this.startMotion()
    }
  },
  computed: {
    loading_index () {
      if( !this.loadingStatus[this.index] ){
        return this.index
      }else if( this.index + 1 > this.imgs.length){
        return 0
      }else{
        return this.index + 1
      }
    },
    loading_img_src(){
      return this.imgs[this.loading_index]
    }
  },
  data () {
    return {
      in_browser: typeof window !== 'undefined',
      index: 0,
      loadingStatus: this.imgs.map( () => false),
      motionStatus: this.imgs.map( () => false),
      imgsRatio: this.imgs.map( () => false),
      timer_even: {},
      timer_odd: {},
      is_odd: false,
      is_touching: false,
      pointerDownPosition: {x: 0, y: 0},
      pointerUpPosition: {x: 0, y: 0},
      progress: 0
    }
  },
  methods: {
    startMotion(){
      var index = this.index
      if(!this.loadingStatus[index]) return
      if(this.motionStatus[index]) return

      this.motionStatus[index] = true

      var img = this.$refs['img_' + index]

      var imgRatio = this.imgsRatio[index]
      var width = this.$refs.slider.clientWidth
      var height = this.$refs.slider.clientHeight
      var windowRatio = width / height
      var durationScale = Math.max(windowRatio / imgRatio, imgRatio / windowRatio)

      var duration = 8000 * durationScale
      var fps = 16
      var progress = 0
      var is_odd = this.is_odd
      var timer = is_odd ? "timer_odd" : "timer_even"

      this.progress = 0

      this[timer] = setInterval( () => {
        if(this.is_touching) return

        progress += fps / duration
        var width = this.$refs.slider.clientWidth
        var height = this.$refs.slider.clientHeight
        var windowRatio = width / height

        if( is_odd ){
          var _progress = progress
        }else{
          var _progress = -progress
        }

        // img[0].style.backgroundPosition = `${(1-_progress) * 100}% ${_progress * 100}%`
        if(imgRatio < windowRatio){
          img[0].style.width = "100%"
          img[0].style.height = "auto"
          if(is_odd){
            img[0].style.top = "auto"
            img[0].style.bottom = 0
          }else{
            img[0].style.top = 0
            img[0].style.bottom = "auto"
          }
          img[0].style.transform = img[0].style.webkitTransform = `translate3d(0,${_progress * (1/imgRatio - 1/windowRatio) * imgRatio * 100}%,0)`
        }else{
          img[0].style.width = "auto"
          img[0].style.height = "100%"
          if(is_odd){
            img[0].style.right = "auto"
            img[0].style.left = 0
          }else{
            img[0].style.right = 0
            img[0].style.left = "auto"
          }
          img[0].style.transform = img[0].style.webkitTransform = `translate3d(${-_progress * (imgRatio - windowRatio) / imgRatio * 100}%,0,0)`
        }

        if(progress >= 0.9 && this.index === index){
          this.next()
        }

        if(this.index !== index){
          this.motionStatus[index] = false
          setTimeout( () => {
            clearInterval(this[timer])
          }, 100)
        }

        if(this.index === index){
          this.progress = progress * (10 / 9)
        }

        // if(progress >= 1){
        //   clearInterval(this[timer])
        //   this.motionStatus[index] = false
        // }
      }, 16)

    },
    next(){
      this.is_odd = !this.is_odd
      if(this.index + 1 >= this.imgs.length){
        this.index = 0
      }else{
        this.index++
      }
    },
    loaded(){
      var index = this.loading_index

      var img = this.$refs.loading_img
      if(img && img.src && !this.imgsRatio[index]){
        var imgsRatio = img.width / img.height
        this.imgsRatio.splice(index, 1, imgsRatio)
      }

      if(!this.loadingStatus[index]){
        this.loadingStatus.splice(index, 1, true)
      }
    },
    pauseMotion(e){
      if(e.touches){
        e = e.touches[0]
      }
      this.pointerDown = {x: e.clientX, y: e.clientY, time: Date.now()}
      this.pointerUp = {x: e.clientX, y: e.clientY, time: Date.now()}

      this.is_touching = true
    },
    pointerMove(e){
      if(e.touches){
        e = e.touches[0]
      }
      this.pointerUp = {x: e.clientX, y: e.clientY}
    },
    resumeMotion(e){
      if(e.touches){
        e = e.touches[0]
      }

      var {x, y, time} = this.pointerDown
      var {x:_x, y:_y} = this.pointerUp
      var timeout = Date.now() - time > 300

      if( (Math.abs(x - _x) < 15 || Math.abs(y - _y) < 15 ) && !timeout){
        this.next()
      }

      this.is_touching = false
    },
    click_nav_cell(i){
      if(i === this.index) return
      this.is_odd = !this.is_odd
      this.index = i
    }
  }
}

</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition all 1s ease

.fade-enter, .fade-leave-active
  opacity 0

.slider
  height 100%
  overflow hidden
  position relative
  user-select none

.slider-wrapper
  .img
    position absolute
    /*height 100%*/
    /*width 100%*/
    left 0
    right 0
    /*object-fit auto*/
    /*background-size cover*/
    /*background-repeat no-repeat*/
    transition opacity 0.8s ease-in-out
    transform translate3d(0,0,0)

.slider-control-cover
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  user-select none

.imgs-nav-wrapper
  position absolute
  bottom 60px
  width 320px
  left 50%
  margin-left -160px
  display flex

@media(max-width: 640px)
  .imgs-nav-wrapper
    width auto
    left 16px
    right 16px
    margin-left 0

.imgs-nav-cell-click-area
  flex 1
  height 20px
  padding 0 2px
  padding-top 9px
  box-sizing border-box
  cursor pointer
  background-color rgba(255,255,255,0.0001)
  position relative
  &:hover
    &:before
      content ''
      position absolute
      left 0
      width 100%
      top 7px
      height 6px
      border-radius 3px
      background-color rgba(255,255,255,0.4)

.imgs-nav-cell
  flex 1
  border-radius 2px
  background-color rgba(255,255,255, 0.4)
  height 2px
  overflow hidden
  -webkit-mask-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC")


.imgs-nav-cell-progress
  height 100%
  width 100%
  background-color rgba(255,255,255, 0.8)

</style>
