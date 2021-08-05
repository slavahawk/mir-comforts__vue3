<template>
  <section class="filter">
    <div class="filter__size">
      <div class="filter__title">Выберите нужный размер:</div>
      <div class="filter__tab">
        <button  @click.prevent="activeTab = 1" :class="{active: activeTab === 1}">Полуторные</button>
        <button @click.prevent="activeTab = 2" :class="{active: activeTab === 2}" >Двуспальные</button>
        <button @click.prevent="activeTab = 3" :class="{active: activeTab === 3}" >Евро</button>
        <button @click.prevent="activeTab = 4" :class="{active: activeTab === 4}" >Семейные</button>
      </div>
    </div>
    <div class="filter__material">
      <div class="filter__title">Материал:</div>
      <select name="select" id="select">
        <option value="1">Бязь</option>
        <option value="2">Поплин люкс</option>
        <option value="3">Сатин</option>
      </select>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FilterMain',
  data(){
    return{
      activeTab: 1
    }
  }
}
</script>
<style scoped lang="scss">
.filter{
  @include disflex(flex, stretch, center);
  margin: 0 0 32px;

  .filter__title{
    font-size: 20px;
    line-height: 23px;
    margin: 0 0 20px;
  }

  .filter__tab{
    background: #F9F9F9;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 24px 0 0;
    button{
      padding: 12px 24px;
      font-size: 16px;
      line-height: 19px;
      &.active{
        background: #323232;
        color: white;
      }
    }
  }
}
</style>
