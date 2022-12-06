<template>
  <div class="container">
    <div class="promo">Найти квартиру в аренду на короткий срок в Липецке</div>
    <div class="filter">
      <my-input
        v-for="input of inputs"
        :key="input.class"
        type="text"
        :class="`input ${input.class}`"
        :placeholder="`${input.placeholder}`"
      />

      <my-button class="btn">Поиск</my-button>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/ui/MyInput.vue";
import '@/assets/styles/style.scss'
import MyButton from "@/components/ui/MyButton.vue";
import { filterInputs } from "@/constants";
export default {
  name: "HomeView",
  data: () => ({
    inputs: filterInputs,
  }),
  components: {
    MyInput,
    MyButton,
  },
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;

  .promo {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

  .filter {
    position: relative;
    display: grid;
    gap: 2px;
    grid-template: 100% / 247px 150px 150px 247px 10%;
    justify-content: center;
  //   @include lg {
  //     grid-template: repeat(3, 60px) / 40% 40%;
  //     gap: 2px;
  //   }
  // }

//   @media (max-width: 1200px) {
//   }
//   @media (max-width: 992px) {

//   }
//   @media (max-width: 767px) {
//   }
//   @media (max-width: 576px) {
//     .promo {
//       font-size: 18px;
//       margin-top: 150px;
//     }
//   }
}
}
</style>
