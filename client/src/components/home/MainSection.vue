<template>
  <section class="main__box">
    <div class="main__text">
      <div class="text">
        <h1>Постельное белье и текстиль европейского производства </h1>
        <h2>
          Спите крепче, наслаждаясь приятным и качественным постельным бельем из экологически чистых
          материалов.
        </h2>
        <button class="button__catalog">
          <span>Смотреть каталог</span>
        </button>
      </div>
    </div>
    <div>
      <img src="@/assets/images/main.jpg" alt="main">
    </div>
  </section>
</template>

<script lang="ts">
export default {}
</script>


<style scoped lang="scss">

.main__box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 100%;
  margin: 12px 0 0;
  padding: 0 20px;
}

.main__text {
  background: #F9F9F9;
  display: flex;
  align-items: center;
}

.text {
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-weight: normal;
    font-size: 50px;
    line-height: 59px;
  }

  h2 {
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    margin: 32px 0 47px;
  }
}

.button__catalog {
  border-radius: 5px;
  background: #F35700;
  padding: 14px 24px;
  color: white;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
}

.categories {
  margin: 84px auto;
  max-width: 1484px;
  padding: 0 16px;

  &__content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 38px;
  }
}

.categories__item {
  background: #F9F9F9;
  padding: 24px;

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }

  span {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666666;
  }
}
</style>
