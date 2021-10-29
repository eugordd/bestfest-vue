<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiContainer'
};
</script>

<style scoped lang="scss">
.ui-container {
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: $container;
  padding: 0 $container-padding;
}
</style>