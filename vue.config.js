

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/mixins.scss"`
      }
    }
  },
  transpileDependencies: [
    "@splidejs"
  ]
};