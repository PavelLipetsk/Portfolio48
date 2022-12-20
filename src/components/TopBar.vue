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
        <li
          v-for="link of links"
          :key="link.title"
          class="header-li"
          active-class="active"
        >
          <router-link class="menu-link" :to="link.to">{{
            link.title
          }}</router-link>
        </li>
      </ul>
    </nav>

    <Button class="btn" text="Войти" />
    <div class="tel">
      <a class="tel-link" href="tel:89036999999">8 903 699 9999</a>
    </div>
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <i
          class="material-icons show"
          v-if="!show"
          @click="show = !show"
          key="menu"
          >menu</i
        >
        <i class="material-icons clear" v-else @click="show = !show" key="clear"
          >clear</i
        >
      </transition>
      <div name="fade" mode="out-in">
        <ul class="burger-ul" :class="{ open: show }">
          <li class="burger-li" v-for="link in links" :key="link">
            {{ link.title }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { MENU_LINKS } from "@/constants";
import Button from "@/components/ui/Button.vue";
export default {
  name: "SutTopbar",
  data: () => ({
    links: MENU_LINKS,
    show: false,
  }),
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  @include md {
    justify-content: space-between;
  }
  .wrapper {
    display: none;
    @include md {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .burger-ul {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        transition: all 1s;
        transform: translateX(100%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        &.open {
          transform: translateX(0);
        }

        .burger-li {
          color: #000;
          cursor: pointer;
          display: flex;
          font-size: 1.3em;
          height: 3em;
          justify-content: center;
          list-style-type: none;
          text-transform: uppercase;
          transition: all 0.3s ease;
          &:hover{
            color:#e4e3e3
          }
        }

      }
    }

    .show,
    .clear {
      cursor: pointer;

      font-size: 2.5em;
      z-index: 3;
    }
  }
  .logo {
    margin-right: 30px;
    padding-top: 8px;
    padding-left: 8px;
    @include lg {
      margin-right: 10px;
    }
  }

  .header-nav {
    flex-grow: 1;
    @include md {
      display: none;
    }
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
    @include lg {
      margin-right: 10px;
    }
    @include md {
      display: none;
    }
    .tel-link {
      color: #000;
      text-decoration: none;
    }
  }

  .btn {
    align-self: center;
    margin-right: 40px;
    padding: 6px 25px;
    border-radius: 5px;
    border: 2px solid #ff3d00;
    background-color: white;
    line-height: 1.5;
    font-style: 1px;
    font-size: 15px;
    @include lg {
      margin-right: 5px;
    }
    @include md {
      margin-right: 0px;
    }
  }
  .material-icons {
    color: #ff3d00;
    font-size: 40px;
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
</style>
