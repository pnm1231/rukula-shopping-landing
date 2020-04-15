<template>
    <header class="container-fluid mb-5">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md" style="max-width:240px">
                    <div id="logo-wrapper" class="text-center">
                        <router-link to="/">
                            <img src="../assets/rukula-shopping-logo.png" height="150" alt="Rukula Shopping">
                        </router-link>
                    </div>
                </div>
                <div class="col-6 col-md d-flex" id="menu-items">
                    <ul class="list-unstyled list-inline mb-0 align-self-center">
                        <li class="list-inline-item">
                            <router-link to="/about">About Us</router-link>
                        </li>
                        <li class="list-inline-item">
                            <router-link to="/contact">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col d-flex" id="contact-numbers">
                    <ul class="list-unstyled list-inline mb-0 align-self-center">
                        <li class="list-inline-item">
                            <a href="tel:+94117785800">
                                <span><i class="fas fa-phone mr-1"></i></span>
                                0117785800
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="tel:+94117785840">
                                <span><i class="fas fa-phone mr-1"></i></span>
                                0117785840
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    height: 150px;
    background-color: #d83743;
    box-shadow: 0 -5px 10px rgba(0,0,0,0.15) inset;
}
#logo-wrapper {
    padding: 15px;
    /*margin: -16px auto 0;*/
    width: 200px;
    background-color: #fff;
    /*border-radius: 0 0 .25rem .25rem;*/
    box-shadow: 0 -0.5rem 1rem rgba(0,0,0,.15) inset;
    z-index: 1;
}
#logo-wrapper img {
    height: 120px;
}

#menu-items a {
    display: inline-block;
    padding: .75rem 1.5rem;
    color: #fff;
    border-radius: 20px;
}
#menu-items a.router-link-active {
    background-color: #e24d58;
}

#contact-numbers {
    justify-content: flex-end;
}
#contact-numbers li {
    margin-left: 15px;
}
#contact-numbers a {
    display: inline-block;
    padding: .50rem 1rem;
    background-color: #b12833;
    border-radius: 20px;
    color: #fff;
}
#contact-numbers i {
    color: #ed3745;
    transform: rotate(90deg);
}

#menu-items a:hover,
#contact-numbers a:hover {
    background-color: #b12833;
    box-shadow: 1px 2px 10px rgba(0,0,0,0.2);
    text-decoration: none;
}

@media only screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
    header {
        margin-bottom: 5rem!important;
        background-color: #fff;
        box-shadow: none;
    }
    #logo-wrapper {
        width: auto;
        box-shadow: none;
        z-index: 0;
    }
    #menu-items a {
        color: #b12833;
    }
    #contact-numbers {
        margin-top: 1rem;
        justify-content: space-between;
    }
}
</style>
