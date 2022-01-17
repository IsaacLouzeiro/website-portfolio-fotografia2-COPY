<template>
    <footer>
        <div class="container row flex-wrap px-3 mx-auto">
            <SocialLinks class="social-links col-12 p-0 mb-3 text-center" />

            <div class="rights col-12 col-md-6 text-center text-md-start p-0 align-self-end">
                <h2><a href="#home">Leandro Louzeiro</a></h2>
                <span>&copy; Todos os direitos reservados</span>
            </div>

            <div class="dev-by col-12 col-md-6 mt-2 mt-md-0 text-center text-md-end p-0 align-self-end">
                <span>Desenvolvido por: <a href="https://github.com/IsaacLouzeiro" target="_blank">Isaac Louzeiro</a></span>
            </div>
        </div>
    </footer>
</template>

<script>
import SocialLinks from './SocialLinks.vue'

export default {
    name: 'FooterComp',
    components: {
        SocialLinks
    }
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/colors.scss";

    footer {
        background-color: $color1;
        color: $color3;
        padding: 2em 0 2.5em 0;

        .container {
            .social-links {
                margin: auto;
                display: inline-block;
            }

            .rights {
                h2 {
                    font-size: 1.5em;
                    font-weight: bold;
                    
                    a {
                        text-decoration: none;
                        color: $color2;

                        &:hover {
                            opacity: .8;
                        }
                    }
                }
            }

            .dev-by {
                a {
                    color: $color2;
                    text-decoration: none;

                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }
</style>