<template>
  <div class="admin-search">
    <el-input
      placeholder="Search"
      prefix-icon="el-icon-search"
      v-model="input"
      @input="handleInput"
      @change="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'AdminSearch',
  data() {
    return {
      input: ''
    };
  },
  methods: {
    handleInput(input) {
      this.$emit('change', input);
      this.$emit('input', input);
    }
  }
};
</script>

<style scoped>

</style>
