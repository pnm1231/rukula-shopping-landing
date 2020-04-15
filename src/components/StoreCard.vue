<template>
    <div class="card border-0 shadow text-center mb-5 mb-md-0">
        <div class="card-body">
            <a :href="store.url" target="_blank">
                <div class="store-image" :style="'background-image: url(' + store.image + ')'"></div>
            </a>
            <h3 class="font-weight-bold mt-3 mb-1">
                <a :href="store.url" class="text-dark" target="_blank">{{ store.name }}</a>
            </h3>
        </div>
        <div class="card-footer bg-transparent">
            <p class="mb-2 text-muted">Supported cities</p>
            <div>
                <span v-for="(city, key) in supportedCities" :key="key" class="badge badge-pill badge-primary mr-1">{{ city.name }}</span>
            </div>
        </div>
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
            supportedCities: []
        }
    },
    mounted () {
        this.store.supportedCities.map(cityId => {
            this.supportedCities.push(cities[cityId])
        })
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
    font-weight: normal;
    /*border: 1px solid #007bff;*/
    /*color: #007bff;*/
    border: 1px solid #ccc;
    color: #333;
    background-color: transparent;
}
</style>
