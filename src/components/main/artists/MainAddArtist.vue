<template>
  <el-select
    filterable
    remote
    reserve-keyword
    placeholder="add artist"
    :remote-method="getArtists"
    :loading="loading"
    :value="selectModel"
    class="main-add-artist"
    popper-class="bestfest-select-dropdown"
    @change="addArtist"
  >
    <el-option
      v-for="item in artists"
      :key="item._id"
      :label="item.name"
      :value="item"
    />
  </el-select>
</template>

<script>
import ArtistAPI from '@api/app/ArtistAPI';

export default {
  name: 'MainAddArtist',
  props: {
    selectedArtists: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectModel: {},
      artists: [],
      loading: false
    };
  },
  methods: {
    async getArtists(search) {
      if (search !== '') {
        this.loading = true;
        const params = {
          search,
          selected: this.selectedArtists.map(artist => artist._id)
        };
        const { data } = await ArtistAPI.getList({ params });
        this.loading = false;
        this.artists = data.artists;
      } else {
        this.artists = [];
        this.loading = false;
      }
    },
    addArtist(event) {
      this.$emit('add-artist', event);
    }
  }
};
</script>

<style scoped lang="scss">
  .main-add-artist {
    ::v-deep .is-focus input {
      &::placeholder {
        color: transparent;
      }
    }

    ::v-deep input {
      background: none;
      text-transform: uppercase;
      font-size: $font-size-sm;
      border: none;
      caret-color: #D23A3A;
      color: #D23A3A;

      &::placeholder {
        display: inline-flex;
        color: #D23A3A;
        text-decoration: underline;
        font-size: $font-size-sm;
        cursor: pointer;
        z-index: 10;
      }
    }
  }
</style>
