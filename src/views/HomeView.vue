<template>
  <div class="main">
    <div class="promo">Найти квартиру в аренду на короткий срок в Липецке</div>
    <Filter />
  </div>
</template>

<script>
import "@/assets/styles/style.scss";
import Filter from "@/components/home/Filter.vue"
export default {
  name: "HomeView",
  components: {
    Filter
  }
};
</script>
<style lang="scss" scoped>
.main
 {flex: 1 1 auto;}

  .promo {
    margin-top: 200px;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }

 
@media (max-width: 576px) {
  .promo {
    font-size: 18px;
    margin-top: 150px;
  }
}
</style>
