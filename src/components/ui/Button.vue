<template>
  <button>
    {{ text }}
  </button>
</template>

<script>


export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  // padding: 60px 200px;
  border-radius: 9px;
  border: 2px solid #ff3d00;
  background-color: white;
  line-height: 1.5;
  font-style: 1px;
}
</style>
