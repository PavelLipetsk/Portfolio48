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
<!--    TODO: Вынести фильтер в отдельный компонет-->
    <Filter/>
    <!--    TODO: Вынести элемент квартиры в отдельный компонет-->
    <div class="cards-wrapper">
      <div class="card" v-for="flat of filterFlats" :key="flat">
      <flat-card/>
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
import FlatCard from "@/components/cardlist/FlatCard.vue"
import Filter from "@/components/cardlist/Filter.vue";
import { FLATS_LIST } from "@/constants";
import { mapMutations, mapState } from "vuex";

// TODO: Переименовать нормально текущий компонет

export default {
  data: () => ({
    // TODO: Убрать константу отсюда
    flats: FLATS_LIST,
    
    
  }),
    components: {
    Filter,
    FlatCard
  },
  methods: {
    ...mapMutations("flat", ["toggleFavourite"]),
  },
  computed: {
      // filterFlats() {
      //   // // TODO: Отрефакторить. Последовательно проверять наличие фильров, если фильр есть, то фильровать если нет, то пох
      //   // if (this.favoriteCheckbox && this.selectedRooms != "") {
      //   //   let matched = [];
      //   //   let fav = this.data.filter((el) => el.favorite);
      //   //   let rooms = this.data.filter((el) => el.rooms === this.selectedRooms);
      //   //   matched = fav.filter( el => rooms.indexOf( el ) > -1 );
      //   //    return matched
      //   //   }
      //   //   if (this.selectedRooms != "") {
      //   //     return this.data.filter((el) => el.rooms === this.selectedRooms);
      //   //   }
     
      //   //  else {
      //   //   return this.data
      //   // }
        
      // },
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

</style>
