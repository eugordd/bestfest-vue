<template>
  <div class="main-festivals-info">
    <ui-container class="main-festivals-info__container">
      <div class="main-festivals-info__rect" />
      <div v-if="festival.imageUrl" class="main-festivals-info__image">
        <img
          :alt="festival.shortName"
          :src="festival.imageUrl"
          width="100%"
          height="100%"
        >
      </div>
      <div class="main-festivals-info__content">
        <div class="main-festivals-info__title">
          {{ festival.name }}
        </div>
        <div class="main-festivals-info__place">
          {{ festival.place }}
        </div>
        <div class="main-festivals-info__dates">
          {{ dates }}
        </div>
        <div class="main-festivals-info__description">
          {{ festival.description }}
        </div>
        <div class="main-festivals-info__link">
          <a :href="festival.website">
            {{ festival.website }}
          </a>
        </div>
      </div>
      <div class="main-festivals-info__artists">
        <div class="main-festivals-info__artists-title">
          Line Up
        </div>
        <main-artist-tag
          v-for="artist in festival.artists"
          :key="artist._id"
          :thumbnail="true"
          :artist="artist.name"
        />
      </div>
    </ui-container>
  </div>
</template>

<script>
import MainArtistTag from '@components/main/artists/MainArtistTag';
export default {
  name: 'MainFestivalsInfo',
  components: { MainArtistTag },
  props: {
    festival: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dates() {
      const dateStart = new Date(this.festival.dateStart);
      const dayStart = dateStart.toLocaleString('default', { day: '2-digit' });
      const monthStart = dateStart.toLocaleString('default', { month: 'short' });
      const yearStart = dateStart.toLocaleString('default', { year: 'numeric' });

      const dateEnd = new Date(this.festival.dateEnd);
      const dayEnd = dateEnd.toLocaleString('default', { day: '2-digit' });
      const monthEnd = dateEnd.toLocaleString('default', { month: 'short' });
      const yearEnd = dateEnd.toLocaleString('default', { year: 'numeric' });

      return `${dayStart} ${monthStart} ${yearStart} – ${dayEnd} ${monthEnd} ${yearEnd}`;
    }
  }
};
</script>

<style scoped lang="scss">
  .main-festivals-info {
    display: flex;
    margin-top: auto;
    min-height: 400px;

    &__container {
      position: relative;
    }

    &__rect {
      position: absolute;
      height: 100%;
      width: calc(100vw + 4px);
      border: $border-default;
      left: $container-padding;
      z-index: 0;
    }

    &__image {
      position: absolute;
      left: $container-padding - 50px;
      top: -50px;
      max-width: 400px;
      height: 260px;
    }

    &__artists {
      position: absolute;
      top: 260px;
      left: $container-padding;
      padding: 0 16px;

      &-title {
        padding-left: 8px;
        font-size: 30px;
        text-transform: uppercase;
      }
    }

    &__content {
      margin-left: 400px;
    }

    &__title {
      font-size: $font-size-md;
    }

    &__dates {
      font-size: $font-size-sm;
      margin-bottom: 20px;
    }

    &__place {
      font-size: $font-size-sm;
    }

    &__description {
      font-size: $font-size-xs;
    }

    &__link {
      font-size: $font-size-xs;
      z-index: 10;
    }
  }
</style>
