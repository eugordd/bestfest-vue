<template>
  <el-tag
    :effect="effect"
    class="artist-tag"
    :size="size"
    :type="type"
    :closable="closable"
    @click="$emit('click')"
    @close="$emit('close')"
  >
    {{ artist }}
  </el-tag>
</template>

<script>
export default {
  name: 'ArtistTag',
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    artist: {
      type: String,
      required: true
    },
    priority: {
      type: Number,
      default: 1
    }
  },
  computed: {
    size() {
      if (!this.selected) return 'small';

      switch (this.priority) {
        case 1:
          return 'small';
        case 2:
          return 'medium';
        case 3:
          return 'default';
      }
      return 'small';
    },
    type() {
      if (!this.selected) return '';

      switch (this.priority) {
        case 1:
          return '';
        case 2:
          return 'warning';
        case 3:
          return 'danger';
      }
      return '';
    },
    effect() {
      return this.selected ? 'dark' : 'plain';
    }
  }
};
</script>

<style scoped lang="scss">
  .artist-tag {
    cursor: pointer;
    margin: 4px 4px;
  }
</style>
