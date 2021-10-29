<template>
  <div class="auth">
    <div class="auth__container">
      <div class="auth__logo">
        <router-link :to="{ name: 'main' }">
          <app-logo />
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import AppLogo from '@components/app/AppLogo';
export default {
  name: 'Auth',
  components: { AppLogo }
};
</script>

<style scoped lang="scss">
  .auth {
    width: 100%;
    height: 100%;

    &__logo {
      position: absolute;
      width: 200px;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
    }

    &__container {
      display: flex;
      position: relative;
      margin: 200px auto;
      max-width: 800px;
      min-height: 400px;
      box-shadow: rgba(0, 0, 0, 0.46) 0 1px 4px;
      padding: 20px 32px;
    }
  }
</style>
