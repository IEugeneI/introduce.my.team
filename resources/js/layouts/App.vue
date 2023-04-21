<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <a class="navbar-brand px-3" href="/"><span style="color: #6b083e;">FRAT</span><span
                style="color: #1278bb;">m</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse px-3" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <a class="nav-link header-menu-link" href="/" v-on:click="changeLinkColor($event)">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link header-menu-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">Individual Services</a>
                        <ul class="dropdown-menu bg-secondary px-2" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item header-menu-link" href="/smm">SMM</a></li>
                            <li><a class="dropdown-item header-menu-link" href="/programing">Programing</a></li>
                            <li><a class="dropdown-item header-menu-link" href="/advertising">SEO and google advertising</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link header-menu-link" href="/contact" v-on:click="changeLinkColor($event)">Fast
                            contact</a>
                    </li>
                </ul>
                <div class="navbar-brand px-3" href="#">
                    <img src="/images/FRATtm-logo.png" style="width: 26px;height: 26px;">
                </div>
            </div>

        </nav>


        <div class="container">
            <router-view></router-view>
        </div>


        <footer class="text-center " style="background-color: white;">
            <div class="container pt-4">
                <section class="mb-4">
                    <a class="btn btn-link btn-floating btn-lg m-1 text-secondary" href="#!" role="button">
                        <b-icon icon="facebook" class="social-link"></b-icon>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg m-1 text-secondary" href="#!" role="button">
                        <b-icon icon="twitter" class="social-link"></b-icon>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg text-secondary m-1" href="#!" role="button"
                       data-mdb-ripple-color="dark">
                        <b-icon icon="google" class="social-link"></b-icon>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg m-1 text-secondary" href="#!" role="button"
                       data-mdb-ripple-color="dark">
                        <b-icon icon="instagram" class="social-link"></b-icon>
                    </a>
                    <a class="btn btn-link btn-floating btn-lg  m-1 text-secondary" href="#!" role="button"
                       data-mdb-ripple-color="dark">
                        <b-icon icon="linkedin" class="social-link"></b-icon>
                    </a>
                </section>
            </div>


            <!-- Copyright -->
            <div class="text-center text-black p-3" style="background-color: white;">
                © 2020 Copyright:
                <a class="text-black" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            <!-- Copyright -->
        </footer>

    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        changeLinkColor(event) {
            let links = document.getElementsByClassName('header-menu-link');
            for (let i = 0; i < links.length; i++) {
                if (links[i].classList.contains('active')) {
                    links[i].classList.remove('active');
                }
            }
            event.target.classList.add('active');
        }
    }
};
</script>
<style scoped>
.header-menu-link {
    color: #bfc2c4 !important;
}

.active {
    color: white !important;
}

/*footer {*/
/*    position: absolute;*/
/*    bottom: -160px;*/
/*    width: 100%;*/
/*    !*bottom:0;*!*/
/*}*/
.social-link:hover{
    color:blue;
}
</style>
