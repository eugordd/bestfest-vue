<template>
  <div
    class="main-artist-tag"
    :class="{
      'main-artist-tag--thumbnail': thumbnail,
      'main-artist-tag--3': priority === 3,
      'main-artist-tag--2': priority === 2,
      'main-artist-tag--1': priority === 1,
    }"
    @click="$emit('click')"
  >
    {{ artist }}
    <div
      class="main-artist-tag__delete"
      :class="{'main-artist-tag__delete--thumbnail': thumbnail}"
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
    },
    thumbnail: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped lang="scss">
  .main-artist-tag {
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

    &:not(.main-artist-tag--thumbnail).main-artist-tag {
      padding: 0 16px;

      &:hover {
        .main-artist-tag__delete {
          display: block;
        }
      }

      &--3:not(.main-artist-tag--thumbnail) {
        font-size: $font-size-xl;

        .main-artist-tag__delete {
          line-height: 90px;
          font-size: $font-size-md;
        }
      }

      &--2:not(.main-artist-tag--thumbnail) {
        font-size: $font-size-lg;

        .main-artist-tag__delete {
          line-height: 70px;
          font-size: $font-size-md;
        }
      }

      &--1:not(.main-artist-tag--thumbnail) {
        font-size: $font-size-md;

        .main-artist-tag__delete {
          line-height: 40px;
          font-size: $font-size-md;
        }
      }
    }

    &--thumbnail.main-artist-tag {
      padding: 0 8px;

      &--3 {
        font-size: $font-size-md;
      }

      &--2 {
        font-size: $font-size-sm;
      }

      &--1 {
        font-size: $font-size-xs;
      }
    }
  }
</style>
