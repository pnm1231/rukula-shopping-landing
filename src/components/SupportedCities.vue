<template>
    <div>
        <div class="card border-0 shadow mb-5">
            <div class="card-body text-center">
                <p class="mb-4" style="font-size:18px">While you stay at home, let us come to you. We cover greater Colombo and its suburbs including...</p>
                <div>
                    <span v-for="(city, key) in cities" :key="key" class="badge badge-pill badge-primary mr-2 mb-2">{{ city.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cities from '../data/cities';

export default {
    name: 'SupportedCities',
    data () {
        return {
            cities: cities
        }
    }
}
</script>

<style scoped>
.badge-primary {
    font-size: 90%;
    font-weight: normal;
    border: 1px solid #ddd;
    color: #333;
    background-color: transparent;
}
</style>
