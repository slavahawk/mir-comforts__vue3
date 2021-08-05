<template>
  <section class="tab">
    <div class="tab__interface">
      <h3>Раскрасим спальню новыми красками и подарим комфортный сон</h3>
      <div class="tab__buttons">
        <button class="tab__button" :class="{active: activeTab === 1}" @click.prevent="activeTab = 1">Качественные
          ткани
        </button>
        <button class="tab__button" :class="{active: activeTab === 2}" @click.prevent="activeTab = 2">Стойкие краски
        </button>
        <button class="tab__button" :class="{active: activeTab === 3}" @click.prevent="activeTab = 3">Экологичное
          производство
        </button>
      </div>
      <div v-if="activeTab === 1" class="tab__content">
        <p>Все ткани производятся исключительно из
          натурального сырья - 100% хлопка высокой
          плотности. Благодаря этому белье:</p>
        <ul>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Нежное и приятное к телу, но при этом очень прочное</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Обладает хорошей воздухопроницаемостью</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Спосоно поглащаться до 8% влаги</span>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 2" class="tab__content">
        <p></p>
        <ul>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Нежное и приятное к телу, но при этом очень прочное</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Обладает хорошей воздухопроницаемостью</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Спосоно поглащаться до 8% влаги</span>
          </li>
        </ul>
      </div>
      <div v-if="activeTab === 3" class="tab__content">
        <p>Все ткани производятся исключительно из
          натурального сырья - 100% хлопка высокой
          плотности. Благодаря этому белье:</p>
        <ul>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Нежное и приятное к телу, но при этом очень прочное</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Обладает хорошей воздухопроницаемостью</span>
          </li>
          <li>
            <img src="@/assets/images/svg/easy.svg" alt="">
            <span>Спосоно поглащаться до 8% влаги</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab__image">
      <img v-if="activeTab === 1" src="@/assets/images/tab/eco.jpg" alt="">
      <img v-if="activeTab === 2" src="@/assets/images/tab/eco.jpg" alt="">
      <img v-if="activeTab === 3" src="@/assets/images/tab/eco.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      activeTab: 1
    }
  }
}
</script>

<style scoped lang="scss">
.tab {
  max-width: 1520px;
  padding: 0 16px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 170px;

  .tab__interface {
    h3 {
      font-weight: normal;
      font-size: 32px;
      line-height: 37px;
      color: #323232;
    }

    .tab__buttons {
      background: #F9F9F9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      @include disflex(flex, space-between, сenter);
      overflow: hidden;

      .tab__button {
        padding: 12px 16px;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #323232;

        &.active {
          background: #323232;
          color: #FFFFFF;
        }
      }
    }

    .tab__content {
      margin: 42px 0 0;

      p {
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

      }

      ul {
        margin: 60px 0 0;

        li {

          @include disflex(flex, stretch, center);
          margin: 0 0 20px;

          &:last-child {
            margin: 0
          }

          img {
            margin: 0 16px 0 0;

            span {
              font-weight: normal;
              font-size: 18px;
              line-height: 21px;
            }
          }
        }
      }
    }

  }
}
</style>
