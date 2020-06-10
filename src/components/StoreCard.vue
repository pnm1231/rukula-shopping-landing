<template>
    <div :id="'store-' + slug" :class="'card border-0 shadow text-center mb-5' + (!store.name ? ' invisible d-none d-md-flex' : '')">
        <div class="card-body">
            <a :href="store.url" target="_blank">
                <div class="store-image" :style="'background-image: url(' + store.image + ')'"></div>
            </a>
            <h3 class="font-weight-bold mt-2 mb-1">
                <a :href="store.url" class="text-dark" target="_blank">{{ store.name }}</a>
            </h3>
            <hr>
            <p class="mb-2 text-muted">Product Categories</p>
            <div>
                <span v-for="(category, key) in store.productCategories" :key="key" class="badge badge-pill badge-primary mr-1 mb-2">{{ category }}</span>
            </div>
        </div>
        <!--<div class="card-footer bg-transparent">
            <p class="mb-2 text-muted">Supported cities</p>
            <div>
                <span v-for="(city, key) in supportedCities" :key="key" class="badge badge-pill badge-primary mr-1">{{ city.name }}</span>
            </div>
        </div>-->
    </div>
</template>

<script>
import cities from '../data/cities';

export default {
    name: 'StoreCard',
    props: [
        'store'
    ],
    data () {
        return {
            slug: this.stringToSlug(this.store.name),
            supportedCities: []
        }
    },
    mounted () {
        this.store.supportedCities.map(cityId => {
            this.supportedCities.push(cities[cityId])
        })
    },
    methods: {
        stringToSlug (str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();

            // remove accents, swap ñ for n, etc
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to   = "aaaaeeeeiiiioooouuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by -
                .replace(/-+/g, '-'); // collapse dashes

            return str;
        }
    }
}
</script>

<style scoped>
.store-image {
    width: 100%;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
.card:hover {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.25)!important;
}
.badge-primary {
    font-size: 90%;
    font-weight: normal;
    /*border: 1px solid #007bff;*/
    /*color: #007bff;*/
    border: 1px solid #ccc;
    color: #333;
    background-color: transparent;
}
hr {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}
</style>
