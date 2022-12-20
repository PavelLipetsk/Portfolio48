<template>
  <div class="filter">
    <Input
      v-for="input of inputs"
      :key="input.class"
      type="text"
      class="input"
      :class="input.class"
      :placeholder="input.placeholder"
    />

    <Button text="Найти" class="btn" :to="{name : Store}" />
  </div>
</template>

<script>
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import { FILTER_INPUTS } from '@/constants'

export default {
  name: 'Filter',
  data: () => ({
    inputs: FILTER_INPUTS,
  }),
  components: {
    Input,
    Button,
  },
}
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  display: grid;
  grid-template: 100% / 247px 150px 150px 247px 10%;
  gap: 2px;
  justify-content: center;

  @include lg {
    grid-template: repeat(3, 60px) / 40% 40%;

    .btn {
      grid-column: span 2;
    }
  }
}
</style>
