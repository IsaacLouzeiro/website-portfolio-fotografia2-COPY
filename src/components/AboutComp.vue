<template>
    <section>
        <div class="bg-color">
            <div class="container">
                <h2 class="py-4">Quem sou eu?</h2>
                <AosVue animation="zoom-in">
                <p class="pb-1">Me chamo Leandro, e sou fotógrafo desde 2018, uma arte que além de me proporcionar um estilo de vida feliz e agradável, aumenta a auto estima das pessoas, e se tornou minha profissão. Fico muito feliz em saber que além de trabalhar com isso, eu ajudo as pessoas a se sentirem mais amadas e bem vistas também por elas mesmas.</p>
                <p class="pb-1">Ultimamente estou me dedicando a ensaios fotográficos, focado em quatro temas diferentes, dentre eles estão: Fotografia gastronômica, ensaio feminino e masculino (externo/estúdio) e esportes radicais.</p>
                <p class="pb-1">Acho muito interessante o processo pós fotográfico de nosso cérebro, que logo após visualizar uma foto nossa, tem o costume de procurar defeitos. Mas com uma bela fotografia, e uma ótima pós produção do mesmo, consegue enxergar mais qualidades do que defeitos, e isso automaticamente acaba aumentando nossa autoestima, e se vê pelo olhar de uma outra pessoa, uma nova perspectiva. Por isso, acredito que ao menos uma vez na vida, todos os seres humanos deveriam fazer um ensaio fotográfico.</p>
                <p class="pb-4">Muito importante lembrar que, a fotografia é um ótimo investimento pra quem quer dar um novo visual nas suas redes sociais. Assim, aumentando as chances de gerar mais seguidores, e também um engajamento maior para com eles.</p>
                </AosVue>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutComp'
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/colors.scss";

    section {
        text-align: center;
        background-image: url(~@/assets/img/bg-sobre.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .bg-color {
            background-color: rgba($color3 , 0.05);
        }

        div {
            h2 {
                font-weight: bold;
                color: $color2;
                font-size: 2em;
            }

            p {
                display: inline-block;
                max-width: 900px;
                font-size: 1.05em;
                color: $color3;
                text-align: justify;
            }
        }
    }
</style>