<template>
  <div
    class="auth-message"
    :class="{
      'auth-message--success': type === 'success',
      'auth-message--error': type === 'error'
    }"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AuthMessage',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'error',
      validator: value => ['error', 'success'].includes(value)
    }
  }
};
</script>

<style scoped lang="scss">
  .auth-message {
    padding: 8px 0;
    font-weight: bold;

    &--success {
      color: $green;
    }

    &--error {
      color: $red-light;
    }
  }
</style>
