<template>
  <div class="main-header">
    <ui-container class="main-header__container">
      <main-header-dates
        class="main-header__item"
      />
      <div class="main-header__line" />
      <main-header-place
        class="main-header__item"
      />
    </ui-container>
  </div>
</template>

<script>
import MainHeaderDates from '@components/main/header/MainHeaderDates';
import MainHeaderPlace from '@components/main/header/MainHeaderPlace';

export default {
  name: 'MainHeader',
  components: { MainHeaderPlace, MainHeaderDates }
};
</script>

<style scoped lang="scss">
  .main-header {
    padding: 80px 0;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__item {
      display: flex;
      flex-wrap: nowrap;
    }

    &__line {
      display: flex;
      height: 2px;
      width: 100%;
      background: #000;
      margin: 0 40px;
    }
  }
</style>
