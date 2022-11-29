<template>
  <header class="header">
    <div class="logo">
      <a href="/">
        <img
          src="https://bureau.ru/soviet/130568/files/logo.svg"
          width="60"
          height="60px"
        />
      </a>
    </div>
    <nav class="menu">
      <ul>
        <li><a href="/products">О нас</a></li>
        <li><a href="/services">Услуги</a></li>
        <li><span class="active">Блог</span></li>
        <li><a href="/contacts">Контакты</a></li>
      </ul>
    </nav>
    <button class="btn">Войти</button>
    <div class="tel">
      <a href="tel:88004000500">8 903 699 9999</a>
    </div>
    <div class="burger">
      <span></span>
    </div>

  </header>
</template>

<script>
export default {
  name: "SutTopbar",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  .logo {
    margin-right: 30px;
    padding-top: 8px;
    padding-left: 8px;
  }
 
  .menu {
    flex-grow: 1;
    ul {
      display: flex;
      flex-flow: row nowrap;
      margin: 2px 0 0;
      padding: 0;
      font-size: 16px;
      line-height: 18px;
      list-style: none;
    }
    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      display: block;
      padding: 8px 10px;
      text-transform: uppercase;
      letter-spacing: 0.27em;
      color: #000;
      text-decoration: none;
    }
    .active {
      display: block;
      padding: 8px 10px;
      text-transform: uppercase;
      letter-spacing: 0.27em;
      color: #fff;
      background-color: #ff3d00;
      border-radius: 8px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  
  .tel {
    font-size: 15px;
    line-height: 12px;
    margin-right: 15px;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  .btn {
    margin-right: 40px;
    padding: 6px 25px;
    border-radius: 5px;
    border: 2px solid #ff3d00;
    background-color: white;
    line-height: 1.5;
    font-style: 1px;
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  .header{
  .btn {
    margin-right: 10px;
  }
   .burger-menu{
    display: none;
  }

  .tel {
    display: none;
  }
  .logo {
    margin-right: 20px;
  }
}
@media (max-width: 767px) {
  .header {
    justify-content: space-between;
    .menu{
      display: none;
    }
    .logo{
      margin-right: 0px;
    }
    .burger{
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    margin-right: 10px;
      span{
        position: absolute;
        background-color: #ff3d00;
        left: 0;
        width: 100%;
        height: 2px;
        top: 9px;
      }
      &:before,
      &:after{
        content: '';
        background-color: #ff3d00;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
      }
      &:after {
        top: 0;
      }
      &:before{
        bottom: 0;
      }
    }
    .btn{
      margin-right: 0px;
    }
  }

  .menu{
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #ff3d00;
    z-index: 3;
  }
  ul{
      display: block
      !important;
    }
}
}
@media (max-width: 576px) {
}
</style>