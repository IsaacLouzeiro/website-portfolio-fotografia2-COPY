<template>
    <div class="container">
        <AosVue animation="zoom-in">
        <div class="box-carousel">
            <h4>Fotografia Masculina</h4>

            <Carousel :settings="settings" :breakpoints="breakpoints" class="box-carousel-bg">
                <Slide v-for="items in masc" :key="items.masc">
                    <div class="carousel__item">
                        <a :href="items.link" target="_blank" class="w-100 h-100 d-inline-block">
                            <img :src="items.img" :alt="items.alt">
                        </a>
                    </div>
                </Slide>

                <template #addons>
                <Navigation />
                </template>
            </Carousel>
        </div>
        </AosVue>

        <AosVue animation="zoom-in">
        <div class="box-carousel">
            <h4>Fotografia Feminina</h4>
            
            <Carousel :settings="settings" :breakpoints="breakpoints" class="box-carousel-bg" >
                <Slide v-for="items in fem" :key="items.fem">
                    <div class="carousel__item">
                        <a :href="items.link" target="_blank" class="w-100 h-100 d-inline-block">
                            <img :src="items.img" :alt="items.alt">
                        </a>
                    </div>
                </Slide>

                <template #addons>
                <Navigation />
                </template>
            </Carousel>
        </div>
        </AosVue>

        <AosVue animation="zoom-in">
        <div class="box-carousel">
            <h4>Fotografia Esportiva</h4>

            <Carousel :settings="settings" :breakpoints="breakpoints" class="box-carousel-bg">
                <Slide v-for="items in esp" :key="items.esp">
                    <div class="carousel__item">
                        <a :href="items.link" target="_blank" class="w-100 h-100 d-inline-block">
                            <img :src="items.img" :alt="items.alt">
                        </a>
                    </div>
                </Slide>

                <template #addons>
                <Navigation />
                </template>
            </Carousel>
        </div>
        </AosVue>

        <AosVue animation="zoom-in">
        <div class="box-carousel">
            <h4>Fotografia Gastronômica</h4>

            <Carousel :settings="settings" :breakpoints="breakpoints" class="box-carousel-bg">
                <Slide v-for="items in gast" :key="items.gast">
                    <div class="carousel__item">
                        <a :href="items.link" target="_blank" class="w-100 h-100 d-inline-block">
                            <img :src="items.img" :alt="items.alt">
                        </a>
                    </div>
                </Slide>

                <template #addons>
                <Navigation />
                </template>
            </Carousel>
        </div>
        </AosVue>

        <div class="text-center pt-2 pb-3">
            <a :href="portfolioLink" target="_blank" class="ver-mais btn">VER MAIS FOTOGRAFIAS</a>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'CarouselPortfolio',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data() {
      return {
        portfolioLink: 'https://www.behance.net/leandrolouzeiro2',
        
        // fotografia masculina
        masc: [
            { 
                link: 'https://www.behance.net/gallery/115157299/Ensaio-fotografico-streetwear-Anderson-Franca', 
                img: require('../assets/img/img1.webp'), 
                alt: 'Imagem masculina 1' 
            },
            { 
                link: 'https://www.behance.net/gallery/115172959/Ensaio-fotografico-streetwear-Diogenes-Cruz', 
                img: require('../assets/img/img2.webp'), 
                alt: 'Imagem masculina 2' 
            },
            { 
                link: 'https://www.behance.net/gallery/115114843/Ensaio-fotografico-streetwear-Kelvin-Bernardo', 
                img: require('../assets/img/img3.webp'), 
                alt: 'Imagem masculina 3'
            },
            { 
                link: 'https://www.behance.net/gallery/115795231/Ensaio-fotografico-masculino-Thiago-Gomes', 
                img: require('../assets/img/img4.webp'), 
                alt: 'Imagem masculina 4' 
            },
            { 
                link: 'https://www.behance.net/gallery/116782341/Ensaio-fotografico-masculino-Osland-Richard', 
                img: require('../assets/img/img20.webp'), 
                alt: 'Imagem masculina 5' 
            },
            { 
                link: 'https://www.behance.net/gallery/115245657/Ensaio-fotografico-streetwear-Natan-Ribeiro', 
                img: require('../assets/img/img18.webp'), 
                alt: 'Imagem masculina 6' 
            },
            { 
                link: 'https://www.behance.net/gallery/116582711/Ensaio-fotografico-streetwear-Gabriel-Rocha', 
                img: require('../assets/img/img17.webp'), 
                alt: 'Imagem masculina 7' 
            },
            { 
                link: 'https://www.behance.net/gallery/114942867/Malabarismo-com-facao-Angelo-Armani', 
                img: require('../assets/img/img23.webp'), 
                alt: 'Imagem masculina 8' 
            },
            { 
                link: 'https://www.behance.net/gallery/116461729/Ensaio-fotografico-Juan-Lamelasa', 
                img: require('../assets/img/img22.webp'), 
                alt: 'Imagem masculina 9' 
            },
            { 
                link: 'https://www.behance.net/gallery/115554359/Ensaio-fotografico-musical-Daniel-Araujo', 
                img: require('../assets/img/img24.webp'), 
                alt: 'Imagem masculina 10' 
            },
        ],

        // fotografia feminina
        fem: [
            { 
                link: 'https://www.behance.net/gallery/116781077/Ensaio-fotografico-feminino-Vanessa-Bitencourt', 
                img: require('../assets/img/img5.webp'), 
                alt: 'Imagem feminina 1' 
            },
            { 
                link: 'https://www.behance.net/gallery/115667883/Ensaio-fotografico-feminino-Rebeca-Camila', 
                img: require('../assets/img/img6.webp'), 
                alt: 'Imagem feminina 2'
            },
            { 
                link: 'https://www.behance.net/gallery/115254445/Book-2-fotografia-streetwear-Juliana-Anjos', 
                img: require('../assets/img/img7.webp'), 
                alt: 'Imagem feminina 3' 
            },
            { 
                link: 'https://www.behance.net/gallery/115102357/Ensaio-fotografico-Juliana-Anjos', 
                img: require('../assets/img/img8.webp'), 
                alt: 'Imagem feminina 4' 
            }
        ],

        // fotografia esportiva
        esp: [
            { 
                link: 'https://www.behance.net/gallery/116903157/Fotografia-esportiva-Le-parkour', 
                img: require('../assets/img/img9.webp'), 
                alt: 'Imagem esportiva 1' 
            },
            { 
                link: 'https://www.behance.net/gallery/115013035/Fotografia-esportiva-%28BMX%29-Vinicius-Mota', 
                img: require('../assets/img/img10.webp'), 
                alt: 'Imagem esportiva 2'
            },
            { 
                link: 'https://www.behance.net/gallery/116220371/Fotografia-esportiva-BMX-Danilo-Samir', 
                img: require('../assets/img/img11.webp'), 
                alt: 'Imagem esportiva 3' 
            },
            { 
                link: 'https://www.behance.net/gallery/118420569/Fotografia-Esportiva-Skateboard', 
                img: require('../assets/img/img12.webp'), 
                alt: 'Imagem esportiva 4' 
            },
            { 
                link: 'https://www.behance.net/gallery/115831725/Ensaio-fotografico-%28skateboard%29-Gabriel-Rocha', 
                img: require('../assets/img/img19.webp'), 
                alt: 'Imagem esportiva 5' 
            }
        ],

        // fotografia gastronomica
        gast: [
            { 
                link: 'https://www.behance.net/gallery/116780391/Fotografia-gastronomica-Comida-japonesa', 
                img: require('../assets/img/img13.webp'), 
                alt: 'Imagem gastronomica 1' 
            },
            { 
                link: 'https://www.behance.net/gallery/118386027/Fotografia-gastronomica-Hamburgueres', 
                img: require('../assets/img/img21.webp'), 
                alt: 'Imagem gastronomica 2'
            },
            { 
                link: 'https://www.behance.net/gallery/118343343/Fotografia-gastronomica-Batatas-recheadas', 
                img: require('../assets/img/img15.webp'), 
                alt: 'Imagem gastronomica 3' 
            },
            { 
                link: 'https://www.behance.net/gallery/116780391/Fotografia-gastronomica-Comida-japonesa', 
                img: require('../assets/img/img16.webp'), 
                alt: 'Imagem gastronomica 4' 
            }
        ],

        // carousel settings
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {

            // 0px and up
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // 345px and up
            345: {
                itemsToShow: 1.2,
                snapAlign: 'center',
            },
            // 395px and up
            395: {
                itemsToShow: 1.5,
                snapAlign: 'center',
            },
            // 450px and up
            450: {
                itemsToShow: 1.7,
                snapAlign: 'center',
            },
            // 500px and up
            500: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 768px and up
            768: {
                itemsToShow: 2.5,
                snapAlign: 'center',
            },
            // 992px and up
            992: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
        },
      }
  }
});
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/colors.scss';

    .box-carousel {
        max-width: 900px;
        margin: 1em auto;

        h4 {
            font-size: 1.3em;
        }

        .box-carousel-bg {
            background-color: $color1;
            margin: 10px auto;
            padding: 10px 30px;
            border-radius: 10px;
        }
    }

    .carousel__item {
        height: 130px;
        width: 100%;

        a {
            background-color: $color2;
            color: $color3;
            border-radius: 3px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                border-radius: 3px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .carousel__slide {
        padding: 10px;
    }

    .carousel__prev--in-active,
    .carousel__next--in-active {
    display: none;
    }

    .ver-mais {
        background-color: $color1;
        color: $color2;
        font-weight: bold;

        &:hover {
            opacity: .7;
        }
    }
</style>