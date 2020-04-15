<template>
    <div class="row mb-5 d-none">
        <div class="col-md-4 offset-md-4 text-center">
            <h4>Select your city</h4>
            <select class="form-control shadow" v-model="selectedCity">
                <option></option>
                <option v-for="(city, key) in cities" :key="key" :value="city">{{ city.name }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import cities from '../data/cities';

export default {
    name: 'Search',
    data () {
        return {
            cities: cities,
            selectedCity: null
        }
    }
}
</script>

<style scoped>

</style>
