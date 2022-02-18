<template>
  <div
    class="main-artist-tag"
    :class="{
      'main-artist-tag__lg': priority === 3,
      'main-artist-tag__md': priority === 2,
      'main-artist-tag__sm': priority === 1
    }"
    @click="$emit('click')"
  >
    {{ artist }}
    <div
      class="main-artist-tag__delete"
      @click.stop="$emit('delete')"
    >
      ✖
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainArtistTag',
  props: {
    artist: {
      type: String,
      required: true
    },
    priority: {
      type: Number,
      default: 1
    }
  },
};
</script>

<style scoped lang="scss">
  .main-artist-tag {
    padding: 0 16px;
    z-index: 10;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;

    &__delete {
      position: absolute;
      right: -10px;
      bottom: 0;
      display: none;
      padding: 8px;
      color: #D23A3A;
      z-index: 20;
    }

    &:hover {
      .main-artist-tag__delete {
        display: block;
      }
    }

    &__lg {
      font-size: $font-size-lg;

      .main-artist-tag__delete {
        line-height: 90px;
        font-size: $font-size-sm;
      }
    }

    &__md {
      font-size: $font-size-md;

      .main-artist-tag__delete {
        line-height: 70px;
        font-size: $font-size-sm;
      }
    }

    &__sm {
      font-size: $font-size-sm;

      .main-artist-tag__delete {
        line-height: 40px;
        font-size: $font-size-sm;
      }
    }
  }
</style>
