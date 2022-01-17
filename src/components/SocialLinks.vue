<template>
    <div class="social-box">
        <a href="https://www.youtube.com/channel/UC67NlPr-CUQD_IWCsmGJhtA/videos" target="_blank"><font-awesome-icon class="icon colored" :icon="['fab', 'youtube']" /></a>
        <a href="https://www.behance.net/leandrolouzeiro2" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'behance']" /></a>
        <a href="mailto: leandrolouzeiro66@gmail.com" target="_blank"><font-awesome-icon class="icon colored" :icon="['fas', 'envelope']" /></a>
        <a href="https://www.instagram.com/louzeiro.l/" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'instagram']" /></a>
        <a href="https://www.linkedin.com/in/leandro-louzeiro-8a6b18195/" target="_blank"><font-awesome-icon class="icon colored" :icon="['fab', 'linkedin']" /></a>
    </div>
</template>

<script>
export default {
    name: 'SocialLinks'
}
</script>

<style lang="scss">
    @import '~@/assets/scss/colors.scss';

    .social-box {
        a {
            margin: 0 .5em;
            .icon {
                font-size: 1.4em;
                color: $color3;
            }
            .colored {
                color: $color2;
            }

            &:hover {
                opacity: .7;
            }
        }
    }
</style>