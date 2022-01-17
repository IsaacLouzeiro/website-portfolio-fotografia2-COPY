<template>
    <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div class="container-fluid container">
            <a class="navbar-brand" href="#home">Leandro Louzeiro</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#home">Início</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#about">Sobre</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portifólio</a>
                    </li>
                    <li class="nav-item d-block d-lg-none">
                    <a href="#budget" class="btn btn-outline-warning w-100 mt-3">Orçamento</a>
                    </li>
                </ul>
            </div>

            <a href="#budget" class="btn btn-outline-warning d-none d-lg-block">Orçamento</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
        // console.log(window.scrollY);

            if(scrollY > 100) {
                document.getElementById('navbar').style.backgroundColor = "#003F63"
                document.getElementById('navbar').style.padding = "1em 0";
                // console.log("plus")
            } else {
                document.getElementById('navbar').style.backgroundColor = "rgba(0,0,0,0)";
                document.getElementById('navbar').style.padding = "2em 0";
                // console.log("minus")
            }
        }
    }
}
</script>

<style lang="scss">
    @import '~@/assets/scss/colors.scss';

    .navbar {
        // background-color: $color1;
        padding: 2em 0;
        transition: .15s;
        
        .container-fluid {
            .navbar-brand {
                color: $color2;
                font-weight: bold;
                font-size: 1.2em;

                &:hover {
                    color: $color2;
                    opacity: .7;
                }
            }

            #navbarNav {
                .navbar-nav {
                    .nav-item {
                        .nav-link {
                            color: $color3;

                            &:hover {
                                opacity: .7;
                            }
                        }
                    }

                    @media only screen and (max-width: 992px) {
                        width: 100%;
                        text-align: center;
                    }
                }
            }
        }
    }

</style>