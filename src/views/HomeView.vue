<template>
  <div class="main">
    <div class="promo">Найти квартиру в аренду на короткий срок в Липецке</div>
    <Filter />
    <span class="material-icons-outlined">
favorite
</span>
  </div>
</template>

<script>
import "@/assets/styles/style.scss";
import Filter from "@/components/home/Filter.vue";
export default {
  name: "HomeView",
  components: {
    Filter,
  },
};
</script>
<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}

.promo {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  @include lg{ 
    margin-top: 20vh;
  }
  @include sm {
    font-size: 18px;
  }
}
</style>
