<template>
  <div class="card">
    <img class="card__image" :src="data.image" alt="">
    <div class="card__description">
      <div class="card__title">{{data.name}}</div>
      <div class="card__size">
        <img src="@/assets/images/svg/size.svg" alt="">
        <span>{{data.size}}</span>
      </div>
      <div class="card__materials">
        <img src="@/assets/images/svg/materials.svg" alt="">
        <span>{{data.materials}}</span>
      </div>
      <div class="card__button">
        <div class="card__price">{{data.price}} ₽</div>
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-rows: 325px 1fr;

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__description {
    padding: 12px;

    .card__title {
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      margin: 0 0 16px;
    }

    .card__size {
      margin: 0 0 16px;
    }

    .card__size, .card__materials {
      @include disflex(flex, stretch, center);

      img {
        margin: 0 12px 0 0;
      }

      span {
        font-size: 16px;
        line-height: 19px;
      }
    }
    .card__button{
      margin: 24px 0 0;
      @include disflex(flex, space-between, center);
      .card__price{
        font-size: 36px;
        line-height: 42px;
      }
      button{
        width: 150px;
        height: 45px;
        background: #F35700;
        border-radius: 5px;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
  }


}
</style>
