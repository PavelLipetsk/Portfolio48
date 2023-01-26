<template>
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
        <!--          TODO: Сделать опции массивом, юзать v-for -->
        <option disabled value="">Выберите один из вариантов</option>
        <option value="" class="oprtion" v-for="room of rooms" :key="room">
          {{ room.ammount }}
        </option>
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
</template>

<script>
export default {
  name: "Filter",
  data: () => ({
    favoriteCheckbox: false,
    selectedRooms: "",
    rooms: [
      { ammount: "Любое" },
      { ammount: "Студия" },
      { ammount: "1-комнатная квартира" },
      { ammount: "2-комнатная квартира" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
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
</style>
