<template>
    <div>
        <h3 class="mb-3">Our partner stores</h3>
        <div v-for="(stores, key) in chunkedStores" :key="key" class="row">
            <div class="col-12">
                <div class="card-deck">
                    <StoreCard v-for="(store, key) in stores" :key="key" :store="store"></StoreCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import stores from '../data/stores';
import StoreCard from '../components/StoreCard';

export default {
    name: 'Stores',
    components: {
        StoreCard
    },
    data () {
        return {
            chunkedStores: []
        }
    },
    created () {
        let allStores = JSON.parse(JSON.stringify(stores));

        while (allStores.length > 0) {
            this.chunkedStores.push(allStores.splice(0, 3));
        }
    }
}
</script>
