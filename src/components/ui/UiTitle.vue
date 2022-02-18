<template>
  <div
    class="ui-title"
    :class="{'ui-title__interactive': interactive}"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'UiTitle',
  props: {
    text: {
      type: String,
      default: ''
    },
    interactive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  .ui-title {
    white-space: nowrap;
    font-size: $font-size-lg;
    line-height: 88px;
    color: #D23A3A;
    text-transform: uppercase;

    &__interactive {
      cursor: pointer;
    }
  }
</style>
