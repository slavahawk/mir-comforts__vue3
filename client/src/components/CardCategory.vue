<template>
  <div @click.prevent="$router.push({name: 'Сategory', params: {category: 'linens'}})"  class="card">
    <div class="card__title">Постельное белье</div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
.card {
  position: relative;
  background: #F9F9F9;
  border-radius: 5px;
  padding: 24px;
  min-height: 240px;
  cursor: pointer;
  &__title {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #323232;
    margin: 0 0 4px;
  }

  &__subtitle {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #666666;
  }

  svg{
    position: absolute;
    bottom: 0;
    right: 0;
  }

}
</style>
