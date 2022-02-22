<template>
  <div class="main-festivals-info">
    <ui-container class="main-festivals-info__container">
      <div class="main-festivals-info__rect" />
      <div class="main-festivals-info__image">
        <img :src="festival.imageUrl" width="100%">
      </div>
      <div class="main-festivals-info__content">
        <div class="main-festivals-info__title">
          {{ festival.name }}
        </div>
        <div class="main-festivals-info__place">
          {{ festival.place }}
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script>
export default {
  name: 'MainFestivalsInfo',
  props: {
    festival: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="scss">
  .main-festivals-info {
    display: flex;
    margin-top: auto;

    &__container {
      position: relative;
    }

    &__rect {
      position: absolute;
      height: 100%;
      width: calc(100vw + 4px);
      border: $border-default;
      left: $container-padding;
    }

    &__image {
      position: absolute;
      left: -50px;
      top: -50px;
    }
  }
</style>
