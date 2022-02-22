<template>
  <div class="main-find-festivals">
    <ui-container class="main-find-festivals__container">
      <div class="main-find-festivals__rect" />
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
    margin-top: auto;

    &__rect {
      position: absolute;
      height: 100%;
      width: calc(100vw + 4px);
      border: $border-default;
      left: $container-padding + 120px;
    }

    &__container {
      position: relative;
      min-height: 90px;
      opacity: .3;

      &:hover {
        opacity: 1;
      }
    }

    &__text {
      padding: 30px;
      text-align: center;
      font-size: $font-size-lg;
      color: #D23A3A;
      text-transform: uppercase;
    }
  }
</style>
