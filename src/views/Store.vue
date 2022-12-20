<template>
  <div class="store-wrapper">
    <div class="bar">
      <div class="choice">
        <marquee scrollamount="0"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ex
          neque, ipsa inventore ea quibusdam tenetur. Aut mollitia eaque in at
          accusamus, asperiores quia possimus magni neque sequi, nihil
          dolor.</marquee
        >
      </div>
    </div>
    <div class="filter-wrapper">
      <div class="filter">
        <div class="promo">Выбирайте лучшее</div>
        <div>
          <input type="checkbox" id="favourite" name="favourite" checked />
          <label for="favourite">Избранное</label>
        </div>
      </div>
    </div>
    <div class="cards-wrapper">
      <div class="card" v-for="flat of flats" :key="flat">
        <div class="carousel">
          <img :src="flat.img" alt="" width="120" />
           <button class="material-icons-outlined" @click="isFavourite">favorite</button>
<span class="material-icons-outlined">
favorite
</span>
        </div>
        <div class="card-discr">{{ flat.rooms }}</div>
        <div class="card-price">{{ flat.cost }} ₽</div>
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
import { FLATS_LIST } from "@/constants";
export default {
  data: () => ({
    flats: FLATS_LIST,
  }),
  
  methods: {
    isFavourite( ) {
      console.log('isFavourite')
      this.$store.commit('flat/isFavourite')
    }
  }
};
</script>

<style lang="scss" scoped>
.store-wrapper {
  display: grid;
  grid-template-areas:
    "bar bar bar bar bar bar bar"
    ". side-menu . content . map map";
  grid-template-columns: 20px 285px 12px 865px 20px 0.01fr 100fr;

  //  @include lg {
  //   grid-template-columns: 5% auto 20%;
  // }
  .bar {
    grid-area: bar;
    height: 10vh;
    width: 100%;
    border: 2px solid red;
    position: sticky;
    display: flex;
    top: 0;
    z-index: 2;
    background-color: #fff;
  }
}
.filter-wrapper {
  grid-area: side-menu;
  position: sticky;
  top: 0;
  .filter {
    padding: 10%;
    margin-top: 15px;
    border: 2px solid red;
    height: 100%;
    overflow-y: scroll;
    height: 100vh;

    // @include lg {
    //   display: none;
    // }
  }
}

.cards-wrapper {
  display: flex;
  flex-direction: column;
  grid-area: content;
  margin-top: 20px;
}
.card {
  background-color: white;
  position: relative;
  border-radius: 4px;
  margin: 10px;
  display: grid;
  grid-template-areas: "carousel discr . price";
  grid-template-columns: 300px 365px 2px 199px;
  &:first-child {
    margin-top: 0px;
  }
  &:hover {
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    transition: box-shadow 0.1s;
  }

}
  .favourite{
    height: 10px;
    width: 10px;
    border: 1px solid red;
    &:focus {
  background-color: #333;
  border-color: #333;
  color: #eee;
}
  }
.map {
  grid-area: map;
  height: 100%;
  width: 100%;
}
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
