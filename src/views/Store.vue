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
          <input
            class="favorite"
            type="checkbox"
            id="favo"
            value="Джек"
            v-model="favoriteCheckbox"
          />
          <label for="favorite">Избранное</label>
        </div>
        <label for="room-amount">Выберите количество комнат</label>
        <select v-model="selectedRooms" class="room-amount" name="room-amount">
          <option disabled value="">Выберите один из вариантов</option>
          <option>Любое</option>
          <option>Студия</option>
          <option>1-комнатная квартира</option>
          <option>2-комнатная квартира</option>
        </select>
        <div class="cost-wrapper">
          <input
            class=""
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="4000"
          />

          <button @click="filterFlats" class="btn">Применить</button>
          <button class="btn">Сбросить все фильтры</button>
        </div>
      </div>
    </div>
    <div class="cards-wrapper">
      <div class="card" v-for="flat of filterFlats" :key="flat">
        <div class="carousel">
          <img :src="flat.img" alt="" width="120" />
          <button
            :class="{ active: flat.favorite }"
            class="favorite"
            @click="isFavorite(flat.id)"
          ></button>
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
import { mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    flats: FLATS_LIST,
    favoriteCheckbox: false,
    selectedRooms: "",
  }),
  methods: {
    ...mapMutations("flat", ["isFavorite"]),
  },
  computed: {
      filterFlats() {
        if (this.favoriteCheckbox && this.selectedRooms != "") {
          let matched = [];
          let fav = this.data.filter((el) => el.favorite);
          let rooms = this.data.filter((el) => el.rooms === this.selectedRooms);
          matched = fav.filter( el => rooms.indexOf( el ) > -1 );
           return matched
          }
          if (this.selectedRooms != "") {
            return this.data.filter((el) => el.rooms === this.selectedRooms);
          }
     
         else {
          return this.data
        }
        
      },
    ...mapState("flat", ["data"]  )
  },
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
    display: flex;

    flex-direction: column;
    padding: 10%;

    margin-bottom: 20px;
    border: 2px solid red;
    height: 100%;
    overflow-y: scroll;
    height: 100vh;
    .promo {
      margin-bottom: 20px;
    }
    .favorite {
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .room-amount {
      font-size: 14px;
      line-height: 14px;

      border-radius: 3px;
      border: 2px solid #fc0606;
    }
    .btn {
      // padding: 60px 200px;
      border-radius: 4px;
      border: 2px solid #ff3d00;
      background-color: white;
      line-height: 1.5;
      font-style: 2px;
    }
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
.favorite {
  height: 10px;
  width: 10px;
  border: 1px solid red;
  &.active {
    background-color: green;
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
