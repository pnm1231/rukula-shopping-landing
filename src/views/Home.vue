<template>
  <div>
    <Search></Search>
    <div class="row">
      <div v-for="(store, key) in stores" :key="key" class="col-md-4">
        <StoreCard :store="store"></StoreCard>
      </div>
    </div>
    <div class="card border-0 shadow mt-5 d-none">
      <div class="card-body">
        <h3 class="mb-4">About Us</h3>
        <p>Rukula was created in 2014 to offer credit to overlooked populations in an easy, transparent and safe manner. Over 5 years we have helped 40,000 low-income individuals obtain household necessities on credit through Rukula’s network of nationwide retailers.</p>
        <p class="mb-0">However, during these times, we understood that our customers needed a way to earn an income, and hence Rukula Shopping was born. The delivery team on this site are freelancers earning a daily income to provide for their families. Rukula is providing the systems and operations team to make sure they can do this.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search';
  import StoreCard from '../components/StoreCard';
  import stores from '../data/stores';

  export default {
    name: 'Home',
    components: {
      Search,
      StoreCard
    },
    data () {
      return {
        stores: stores
      }
    }
  }
</script>

<style scoped>

</style>
