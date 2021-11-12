<template>
  <el-input
    :id="id"
    :value="value"
    v-bind="$attrs"
    class="auth-input"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'AuthInput',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
  }
};
</script>

<style scoped lang="scss">
  .auth-input {
    padding-bottom: 16px;
  }
</style>
