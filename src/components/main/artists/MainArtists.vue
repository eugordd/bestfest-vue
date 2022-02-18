<template>
  <div class="main-artists">
    <ui-container class="main-artists__container">
      <div class="main-artists__rect" />
      <div class="main-artists__tags">
        <main-artist-tag
          v-for="artist in artists"
          :key="artist._id"
          :artist="artist.name"
          :priority="artist.priority"
          @click="increaseArtistPriority(artist._id)"
          @delete="deleteArtist(artist._id)"
        />
        <main-add-artist
          :key="addArtistKey"
          :selected-artists="artists"
          @add-artist="addArtist"
        />
      </div>
    </ui-container>
  </div>
</template>

<script>
import MainAddArtist from '@components/main/artists/MainAddArtist';
import MainArtistTag from '@components/main/artists/MainArtistTag';
export default {
  name: 'MainArtists',
  components: { MainArtistTag, MainAddArtist },
  props: {
    artists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      addArtistKey: 0
    };
  },
  methods: {
    addArtist(artist) {
      const newArtist = {
        ...artist,
        priority: 1
      };
      const newArtistsList = [...this.artists, newArtist];
      this.$emit('update', newArtistsList);
      this.addArtistKey = Math.random().toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5);
    },
    increaseArtistPriority(artistId) {
      const newArtistsList = [...this.artists];
      newArtistsList.forEach(item => {
        if (item._id === artistId) {
          item.priority = item.priority < 3 ? item.priority + 1 : 1;
        }
      });
      this.$emit('update', newArtistsList);
    },
    deleteArtist(artistId) {
      const newArtistsList = this.artists.filter(item => item._id !== artistId);
      this.$emit('update', newArtistsList);
    }
  }
};
</script>

<style scoped lang="scss">
  .main-artists {
    &__container {
      position: relative;
      min-height: 200px;
    }

    &__tags {
      margin-left: -16px;
      padding: 24px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
    }

    &__rect {
      position: absolute;
      height: 100%;
      width: calc(100vw + 4px);
      border: $border-default;
      right: $container-padding;
    }
  }
</style>
