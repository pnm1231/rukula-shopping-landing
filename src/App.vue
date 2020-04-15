<template>
  <div id="app">
    <Header></Header>
    <main class="container-fluid">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
body {
  background-color: #fefcf9 !important;
  background-image: url('assets/man-holding-shopping-bag.png');
  background-repeat: no-repeat;
  background-size: auto 500px;
  background-position: 98% bottom;
  min-height: 100vh;
}
#app {
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main a,
footer a {
  margin:0 15px;
  color: #d83743;
}
main a:hover,
footer a:hover {
  color: #8c2a30;
}
</style>
