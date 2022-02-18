<template>
  <div class="main">
    <div class="main__settings">
      <main-header />
      <main-artists
        :artists="artists"
        @update="updateArtists"
      />
    </div>
    <div class="main__spacer" />
    <main-find-festivals />
  </div>
</template>

<script>
import MainHeader from '@components/main/header/MainHeader';
import MainArtists from '@components/main/artists/MainArtists';
import MainFindFestivals from '@components/main/festivals/MainFindFestivals';

export default {
  name: 'MainNew',
  components: { MainFindFestivals, MainArtists, MainHeader },
  data() {
    return {
      dateRange: [],
      artists: [],
      isFestivalsPage: false
    };
  },
  methods: {
    updateArtists(artists) {
      this.artists = artists;
    }
  }
};
</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .festivals-enter-active {
    transition: all 0.3s ease-out;
  }

  .festivals-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .festivals-enter-from,
  .festivals-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>

<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    background: url("/paper-texture.jpg");
    background-size: 50%;
    width: 100%;
    height: 100%;

    &__settings {
      display: flex;
      flex-direction: column;
    }

    &__spacer {
      display: flex;
      flex-grow: 1;
    }

    &__header {
      &-container {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
