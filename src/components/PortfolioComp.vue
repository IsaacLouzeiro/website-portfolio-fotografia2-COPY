<template>
    <section class="bg-portfolio">
        <div class="color-portfolio pb-4">
            <div class="container">
                <h2 class="pt-4 pb-3 text-center">Portifólio</h2>

                <CarouselPortfolio />
            </div>
        </div>
    </section>
</template>

<script>
import CarouselPortfolio from './CarouselPortfolio.vue'

export default{
  name: 'PortfolioComp',
  components: {
    CarouselPortfolio
  }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/colors.scss';

    section {

        h2 {
            font-weight: bold;
            color: $color1;
            font-size: 2em;
        }

        &.bg-portfolio {
            background-image: url('../assets/img/bg-portifolio.webp');
            background-position: center;
            background-repeat: repeat;
            background-attachment: fixed;
        }

        .color-portfolio {
            background-color: rgba($color3, 0.85);
        }
    }
</style>