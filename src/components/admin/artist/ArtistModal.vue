<template>
  <el-dialog
    :visible="isModalOpened(modalName)"
    :title="header"
    @open="onModalOpen"
    @close="closeModal"
  >
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Genres">
        <el-select
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="Add artist genre"
          no-data-text="Type and press enter"
          v-model="form.genres"
        >
          <el-option
            v-for="item in genres"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="artistId"
          type="primary"
          @click="editGenre"
        >
          Edit
        </el-button>
        <el-button
          v-if="!artistId"
          type="primary"
          @click="addGenre"
        >
          Create
        </el-button>
        <el-button @click="closeModal">
          Cancel
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ArtistModal',
  props: {
    artistId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modalName: 'artistCrud',
      form: {
        name: '',
        symlinks: []
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['isModalOpened']),
    ...mapState('admin/genre', ['genres']),
    header() {
      return this.artistId ? 'Edit artist' : 'Add artist';
    }
  },
  methods: {
    ...mapActions('modals', ['a_closeModal']),
    ...mapActions('admin/genre', ['a_getGenresList']),
    ...mapActions('admin/artist', ['a_getArtist', 'a_createArtist', 'a_updateArtist']),
    getData() {
      this.a_getGenresList();
    },
    async onModalOpen() {
      this.getData();

      if (this.artistId) {
        const { genre } = await this.a_getArtist({ id: this.artistId });
        this.form = {
          name: genre.name,
          symlinks: genre.symlinks
        };
      } else {
        this.form = {
          name: '',
          symlinks: []
        };
      }
    },
    closeModal() {
      this.a_closeModal(this.modalName);
    },
    async addGenre() {
      const payload = {
        name: this.form.name,
        symlinks: this.form.symlinks
      };
      await this.a_createGenre(payload);
      this.closeModal();
    },
    async editGenre() {
      const payload = {
        name: this.form.name,
        symlinks: this.form.symlinks,
        id: this.artistId
      };
      await this.a_updateGenre(payload);
      this.closeModal();
    }
  }
};
</script>

<style scoped>

</style>
