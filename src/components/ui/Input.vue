<template>
  <input
    class="Input"
    :class="{ error }"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event)"
  />
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    error: {
      boolean: true,
    },
  },
}
</script>

<style scoped lang="scss">
.Input {
  background: #fff;
  border: 2px solid #ff3d00;
  border-radius: 9px;
  height: 60px;
  font-size: 20px;
  padding: 18px 12px 0;

  &.error {
    border: 1px solid red;
  }
}
</style>
