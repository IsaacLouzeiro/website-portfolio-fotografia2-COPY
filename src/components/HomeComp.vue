<template>
    <section class="h-100 bg-image">
        <div class="bg-color h-100">
            <div class="container h-100 row mx-auto position-relative">
                <div class="le-image d-none d-lg-flex col-6 align-items-end">
                    <img src="~@/assets/img/img-leandro.webp" alt="Imagem do Leandro Louzeiro">
                </div>

                <div class="summary col-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <div>
                        <h1>{{ nome}} <br>{{ sobrenome }}</h1>
                        <hr />
                        <h3>{{ profissao }}</h3>
                        <SocialLinks />
                    </div>
                </div>

                <div class="position-absolute arrow p-0">
                    <span class="mb-5">Clique na seta para saber mais sobre mim</span>

                    <div class="downArrow bounce" style="z-index: 9999999;">
                        <a href="#about"><i class="fa-2x text-light"><font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";

export default {
    name: 'HomeComp',
    data() {
        return {
            nome: 'Leandro',
            sobrenome: 'Louzeiro',
            profissao: 'Fotógrafo'
        }
    },
    components: {
        SocialLinks
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/colors.scss';
    @import '~@/assets/scss/arrowAnimation.scss';
    
    section {
        max-height: 768px;
        min-height: 650px;
        .bg-color {
            background-color: rgba($color1, .9);

            .row {
                .le-image {
                    height: 100%;
                    img {
                        max-width: 90%;

                        @media only screen and (max-width: 1400px) {
                            max-width: 100%;
                        }
                        @media only screen and (max-width: 1200px) {
                            max-width: 120%;
                        }
                    }
                }

                .summary {
                    div {
                        h1 {
                            font-weight: bold;
                            font-size: 3.5em;
                            color: $color3;
                            opacity: .8;
                        }

                        hr {
                            border: 3px solid;
                            opacity: 1;
                            margin-top: 0;
                            margin-bottom: 10px;
                            color: $color2;
                        }
                        
                        h3 {
                            font-weight: bold;
                            margin-bottom: 15px;
                            color: $color3;
                            opacity: .8;
                        }
                    }
                }

                .arrow {
                    right: 0;
                    left: 0;
                    bottom: 0;
                    z-index: 1;
                    text-align: center;

                    span {
                        display: inline-block;
                        color: $color3;
                        // margin-bottom: 3em;
                    }
                }
            }
        }

        &.bg-image {
            background-image: url('~@/assets/img/bg-inicio.webp');
            background-position: start center;
            background-attachment: fixed;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
</style>