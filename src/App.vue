<template>
  <div class="app">
    <topbar />
    <router-view class="content" />
    <Footer class="footer" />
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

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}
</style>
