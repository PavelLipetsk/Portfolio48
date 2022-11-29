<template>
<div id="#app">
  <sut-topbar />
  <router-view></router-view>
  <sut-footer />
</div>
</template>

<script>
import '@/assets/styles/style.css'
import SutTopbar from '@/components/TopBar.vue'
import SutFooter from '@/components/Footer.vue'
export default {
  name: 'SutApp',
  components: {
    SutTopbar,
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
.router-view{
  flex: 1 1 auto;
}

</style>