<template>
  <button @click.prevent="$router.go(-1)">
    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2463 3.43775C9.33077 3.43775 3.72307 8.614 3.72307 15.0003C3.72307 21.3853 9.33077 26.5628 16.2463 26.5628C23.1618 26.5628 28.7695 21.3853 28.7695 15.0003C28.7695 8.614 23.1618 3.43775 16.2463 3.43775Z" stroke="#D7C5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.199 10.6613L13.4794 15L18.199 19.3388" stroke="#D7C5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>Вернутьтся назад</span>
  </button>
</template>

<script>
export default {
}
</script>
<style scoped lang="scss">
button{
  margin: 0 0  40px;
  @include disflex(flex, stretch, center);
  svg{
    margin: 0 16px 0 0;
  }
  span{
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
    color: #D7C5B3;
  }
}
</style>
