<template>
  <div id="app">
    <topbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import '@/assets/styles/style.scss'

import Topbar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'SutApp',
  components: {
    Topbar,
    Footer,
  },
}
</script>

<style>
#app {
  position: relative;
  min-height: 100%;
}

#Footer{

	position:absolute;
	bottom:0;
	background-color:red;
	height:100px;
	width:100px;

}
</style>
