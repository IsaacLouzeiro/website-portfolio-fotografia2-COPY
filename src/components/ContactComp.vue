<template>
    <section class="pb-3">
        <h2 class="pt-4">Orçamento</h2>
        <span>Preencha os campos com seus dados a baixo <br>e contate-me para um orçamento</span>

        <SendMail />
    </section>
</template>

<script>
import SendMail from './SendMail.vue';

export default {
    name: 'ContactComp',
    components: {
        SendMail
    }
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/scss/colors.scss";

    section {
        text-align: center;

        h2 {
            font-weight: bold;
            color: $color1;
            font-size: 2em;
        }

        span {
            color: $color2;
            margin: 0 5px;
        }
    }
</style>