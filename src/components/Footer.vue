<template>
   
  <div class="container">
   
    <div class="label">Apartments48</div>
    <div class="social">
      <router-link
        v-for="link of links"
        :key="link.class"
        class="social-icon"
        :class="[link.class]"
        :to="link.to"
      >
        <i :class="` i fab fa-${link.class}`"></i>
      </router-link>
    </div>
    <div class="adress">Липецк. Шерстобитова 10</div>
  </div>
</template>

<script>
import { SOCIALS } from '@/constants'

export default {
  name: 'SutFooter',
  data: () => ({
    links: SOCIALS,
  }),
}
</script>

<style lang="scss" scoped>
// TODO: Погулить как прижат футер к низу страницы и сделать



.container {
  display: flex;
}

.social {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: #f2f2f2;
  border-radius: 50%;
  box-shadow: 0px 0px 5px #00000080;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  .i {
    font-size: 12px;
    color: #67798e;
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    transform: translate(0, 70px);
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 0px 15px #00000080;

    .i {
      color: #fff;
    }

    &:after {
      transform: translate(0);
    }
  }
}

.instagram {
  &:after {
    background-color: #833ab4;
  }
}

.facebook {
  &:after {
    background-color: #3b5998;
  }
}

.github {
  &:after {
    background-color: #333;
  }
}

.twitter {
  &:after {
    background-color: #00acee;
  }
}

.linkedin {
  &:after {
    background-color: #0e76a8;
  }
}

@include sm {
  .label,
  .adress {
    display: none;
  }
}
</style>
