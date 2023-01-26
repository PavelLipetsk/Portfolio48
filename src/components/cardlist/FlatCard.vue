<template>
  <div class="carousel">
    <img :src="img" alt="" width="120" />
    <button
      :class="{ active: flat.favorite }"
      class="favorite"
      @click="toggleFavourite(flat.id)"
    ></button>
  </div>
  <div class="card-discr">{{ flat.rooms }}</div>
  <div class="card-price">{{ flat.cost }} ₽</div>
</template>

<script>

export default {
  name: "Card",
  props: {
    img: {
      type: String,
      required: true
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>

.card-discr {
  border-right: 2px solid red;
  grid-area: discr;
}
.card-price {
  grid-area: price;
}
.card-discr,
.card-price {
  margin-top: 10px;
}
</style>
