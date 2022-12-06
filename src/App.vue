<template>
<div id="#app">
  <topbar />
  <router-view />
  <sut-footer />
</div>
</template>

<script>
import '@/assets/styles/style.scss'
// import '@/assets/styles/mixins.scss'
import Topbar from '@/components/TopBar.vue'
import SutFooter from '@/components/Footer.vue'
export default {
  name: 'SutApp',
  components: {
    Topbar,
    SutFooter
  }
}
</script>

<style>
#app{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

</style>