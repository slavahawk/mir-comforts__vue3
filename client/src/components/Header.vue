<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <router-link to="/"> МИР КОМФОРТА</router-link>
      </div>
      <div class="header__links">
        <router-link to="/">Главная</router-link>
        <router-link to="/categories">Каталог</router-link>
        <router-link to="/">Доставка и оплата</router-link>
      </div>
      <div class="header__basket">
        <a href="tel:+79082090500">+7 (908) 209 05 00</a>
        <button @click.prevent="$router.push('/basket')" class="button__basket">
          <img src="@/assets/images/basket.svg" alt="basket">
          <span>{{ count }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #FFFFFF;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.header__content {
  padding: 20px 16px;
  margin: 0 auto;
  max-width: 1484px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
}

.header__links {
  text-transform: uppercase;

  a {
    color: #323232;
    margin: 0 78px 0 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    &:last-child {
      margin: 0;
    }
  }
}

.header__basket {
  display: flex;
  align-items: center;

  a {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #323232;
  }
}

.button__basket {
  position: relative;
  width: 56px;
  height: 56px;
  background: #FFFFFF;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 46px;


  span {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 24px;
    height: 24px;
    background: #323232;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
