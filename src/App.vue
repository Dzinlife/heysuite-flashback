<template lang="pug">
transition(name="fade" mode="out-in")
  router-view
</template>

<style lang="stylus">
body
  font-family Roboto, Helvetica, sans-serif
  font-size 20px
  background-color lighten(#eceef1, 30%)
  margin 0
  color #34495e
  -webkit-font-smoothing antialiased

body, html
  height 100%

#app
  height 100%
  overflow hidden

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

</style>
