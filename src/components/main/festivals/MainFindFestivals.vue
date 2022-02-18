<template>
  <div class="main-find-festivals">
    <ui-container class="main-find-festivals__container">
      <div class="main-find-festivals__text">
        Your top 5 festivals
      </div>
    </ui-container>
  </div>
</template>

<script>
export default {
  name: 'MainFindFestivals'
};
</script>

<style scoped lang="scss">
  .main-find-festivals {
    cursor: pointer;

    &__container {
      position: relative;
      min-height: 120px;
    }

    &__text {
      padding: 40px;
      text-align: center;
      font-size: $font-size-lg;
      color: #D23A3A;
      text-transform: uppercase;
      border-top: $border-default;
      border-left: $border-default;
      border-right: $border-default;
    }
  }
</style>
