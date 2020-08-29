<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import NavMenu from './components/nav-menu'
import MainFooter from './components/main-footer'
export default {
  name: 'App',
  components: {
    NavMenu,
    MainFooter
  },
}
</script>

