<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  font-family: Sora, sans-serif;
  overflow-x: hidden;

  &.modal-opened {
    overflow: hidden;
  }

  textarea {
    font-family: Sora, sans-serif;
  }

  input {
    font-family: Sora, sans-serif;
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
