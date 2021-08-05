<template>
  <section class="categories">
      <ButtonBack/>
    <h2>Категории</h2>

    <section class="categories__items">
      <CardCategory v-for="card in 7" :key="card.id" />
    </section>
  </section>
</template>

<script>
import ButtonBack from "../components/ButtonBack";
import CardCategory from "../components/CardCategory";
export default {
  components: {
    CardCategory,
    ButtonBack
  }
}
</script>


<style lang="scss" scoped>
.categories{
  max-width: 1520px;
  padding: 0 16px;
  margin: 84px auto;
  width: 100%;
  .categories__items{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 38px;
  }
}

</style>
