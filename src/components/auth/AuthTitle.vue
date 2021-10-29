<template>
  <div class="auth-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AuthTitle'
};
</script>

<style scoped lang="scss">
  .auth-title {
    width: 100%;
    font-weight: bold;
    font-size: 32px;
    color: $blue-light;
    text-align: center;
    padding: 16px 32px;
  }
</style>
