<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Nunito, sans-serif;

  &.modal-opened {
    overflow: hidden;
  }
}

div {
  box-sizing: border-box;
}

img {
  display: block;
  pointer-events: none;
  user-select: none;
}
</style>
