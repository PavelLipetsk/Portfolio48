<template>
  <header class="header">
    <div class="logo">
     
      <router-link to="/">
        <img
          src="https://bureau.ru/soviet/130568/files/logo.svg"
          width="60"
          height="60"
        />
      </router-link>
    </div>
    <nav class="header-nav">
      <ul class="header-ul">
        <li v-for="link of links" :key="link.title" class="header-li">
          <router-link class="menu-link" :to="link.to">{{ link.title }}</router-link>
        </li>
      </ul>
    </nav>

    <my-button class="btn">Войти</my-button>
    <div class="tel">
      <router-link class="tel-link" to="">8 903 699 9999</router-link>
    </div>
    <nav class="burger">
      <transition name="fade" mode="out-in">
        <i
          class="material-icons show"
          v-if="!show"
          @click="show = !show"
          key="menu"
        >
          menu</i
        >
        <i class="material-icons clear" v-else @click="show = !show" key="clear"
          >clear</i
        >
      </transition>
      <transition name="fade">
        <ul v-if="show">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import { menuLinks } from "@/constants";
import MyButton from "@/components/ui/MyButton.vue"
export default {
  name: "SutTopbar",
  data: () => ({
    links: menuLinks,
  }),
   components: {
    MyButton
  },
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

  .header-nav {
    flex-grow: 1;

  
    .header-ul {
      display: flex;
      flex-flow: row nowrap;
      margin: 2px 0 0;
      padding: 0;
      font-size: 16px;
      line-height: 18px;
      list-style: none;
    }

    .header-li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    .menu-link {
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

    .tel-link {
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
      .material-icons {
      color: #ff3d00;
      font-size: 40px;
    }
}

@media (max-width: 992px) {
  .header {
    .btn {
      margin-right: 10px;
    }

    .burger-menu {
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

      .header-nav {
        display: none;
      }

      .logo {
        margin-right: 0px;
      }

      .btn {
        margin-right: 0px;
      }
    }

    .menu {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: #ff3d00;
      z-index: 3;
    }
    ul {
      display: block !important;
    }
  }
}

@media (max-width: 576px) {
}
</style>
