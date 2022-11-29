<template>
  <div class="container">
    <div class="promo">Найти квартиру в аренду на короткий срок в Липецке</div>
    <div class="filter">
      <input type="text" id="1" class="input region" placeholder="Выберите район"/>
      <input type="text" id="2" class="input data-in" placeholder="Дата заезда"/>
      <input type="text" id="3" class="input data-out" placeholder="Дата выезда"/>
      <input type="text" id="4" class="input guests" placeholder="Количество гостей"/>
      <button class="search">Поиск</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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
  grid-template: 100% / 247px 150px 150px 247px 10% ;
  justify-content: center;

  .input {
  background: rgb(255, 255, 255);
  border: 2px solid #ff3d00;
  border-radius: 9px;
  height: 60px;
  font-size: 20px;
  padding: 0 12px;
  padding-top: 18px;
  
}
.search {
  padding: 60px, 200px;
  border-radius: 9px;
  border: 2px solid #ff3d00;
  background-color: white;
  line-height: 1.5;
  font-style: 1px;
}
}  
@media (max-width:1200px) {
  .container{
      
  }
}
@media (max-width:992px) {
  
    .filter{
      grid-template: repeat(3, 60px)/ 40% 40%;
      gap: 2px;
      .search{
        grid-column: span 2;
      }
      
    }
  
}
@media (max-width:767px) {
 
}
@media (max-width: 576px) {
  .promo{
    font-size: 18px;
    margin-top: 150px;
  }
  
}
}







</style>
