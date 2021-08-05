<template>
  <MainSection/>
  <section class="smart__navigation">
    <CardSmartMenu v-for="card in MAIN.type" :key="card.id" :type="card"/>
  </section>
  <Tab/>
  <section class="catalog__small">
    <h3>Выберите любую из <span>60 моделей</span> для вашей спальн</h3>
    <div class="catalog__small__cards">
      <CardProduct v-for="card in MAIN.products" :key="card.id" :data="card"/>
    </div>
  </section>
</template>

<script>
import MainSection from "../components/home/MainSection";
import CardSmartMenu from "../components/CardSmartMenu";
import {mapActions, mapGetters} from 'vuex'
import Tab from "../components/home/Tab";
import CardProduct from "../components/CardProduct";

export default {
  name: 'Home',
  components: {
    CardProduct,
    Tab,
    CardSmartMenu,
    MainSection
  },
  methods: {...mapActions(['GET__DATA__MAIN'])},
  computed: {...mapGetters(['MAIN'])},
  mounted() {
    this.GET__DATA__MAIN()
    console.log(process.env)
  }
}
</script>


<style lang="scss" scoped>
.smart__navigation {
  max-width: 1520px;
  padding: 0 16px;
  margin: 84px auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 38px;
}

.catalog__small {
  max-width: 1520px;
  padding: 0 16px;
  margin: 84px auto;

  h3 {
    font-size: 32px;
    line-height: 37px;
    margin: 0 0 46px;
    span{
      color: #F35700;
    }
  }

  .catalog__small__cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 36px;
  }
}

</style>
