<template>
  <section class="catalog__small">
    <ButtonBack/>
    <h3>Постельное белье</h3>
    <FilterMain/>
    <div class="catalog__small__cards">
      <CardProduct v-for="card in 8" :key="card.id" :data="card"/>
    </div>
  </section>
</template>

<script>

import CardProduct from "../components/CardProduct";
import ButtonBack from "../components/ButtonBack";
import FilterMain from "../components/FilterMain";

export default {
  components: {
    FilterMain,
    ButtonBack,
    CardProduct,
  }
}
</script>


<style lang="scss" scoped>
.catalog__small {
  max-width: 1520px;
  padding: 0 16px;
  margin: 84px auto;

  h3 {
    font-size: 32px;
    line-height: 37px;
    margin: 0 0 32px;
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
