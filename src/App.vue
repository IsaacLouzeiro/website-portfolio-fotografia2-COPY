<template>
    <NavBar class="fixed-top" />

    <HomeComp id="home" />

    <AboutComp id="about" />

    <PortfolioComp id="portfolio" />

    <ContactComp id="budget" />

    <FooterComp />
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomeComp from './components/HomeComp.vue';
import AboutComp from './components/AboutComp.vue';
import PortfolioComp from './components/PortfolioComp.vue';
import ContactComp from './components/ContactComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
      NavBar,
      HomeComp,
      AboutComp,
      ContactComp,
      PortfolioComp,
      FooterComp
  },

  data() {
      return {
        message: "hiiii"
      }
  }
}
</script>

<style lang="scss">
    @import "~@/assets/scss/colors.scss";

    @font-face {
        font-family: 'Ubuntu';
        src: url(~@/assets/fonts/Ubuntu-R.woff);
        font-weight: normal;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: url(~@/assets/fonts/Ubuntu-B.woff);
        font-weight: bold;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
    }

    html, body, #app {
        width: 100%;
        height: 100%;
    }
</style>
