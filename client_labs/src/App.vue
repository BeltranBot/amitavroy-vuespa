<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TopMenu from '@/components/TopMenu'
  export default {
    components: {
      TopMenu
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      console.log('I was created')
      const user = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', user)
    }
  }
</script>
