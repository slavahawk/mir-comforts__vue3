<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import '@/assets/scss/style.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {Footer, Header}
}
</script>

<style lang="scss">

#app{
  overflow-x: hidden;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

</style>

