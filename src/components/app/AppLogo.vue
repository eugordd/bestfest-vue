<template>
  <div class="app-logo">
    <img class="app-logo__logo" :src="logoSrc" alt="FindFest">
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  computed: {
    logoSrc() {
      return require('@assets/app/logo.svg');
    }
  }
};
</script>

<style scoped lang="scss">
.app-logo {
  &__logo {
    width: 100%;
  }
}
</style>
