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
      <el-form-item label="Description">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          v-model="form.description"
        />
      </el-form-item>
      <el-form-item label="Genres">
        <el-select
          multiple
          filterable
          default-first-option
          placeholder="Add artist genre"
          no-data-text="Type and press enter"
          v-model="form.genres"
        >
          <el-option
            v-for="item in genresListNotDetailed"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Country">
        <el-select
          filterable
          default-first-option
          placeholder="Country"
          v-model="form.country"
        >
          <el-option
            v-for="item in countriesList"
            :key="item[0]"
            :label="item[1].name"
            :value="item[0]"
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
import { countries } from 'countries-list';

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
      modalName: 'artistCRUD',
      form: {
        name: '',
        description: '',
        country: '',
        genres: []
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['isModalOpened']),
    ...mapState('admin/genre', ['genresListNotDetailed']),
    countriesList() {
      return Object.entries(countries);
    },
    header() {
      return this.artistId ? 'Edit artist' : 'Add artist';
    }
  },
  methods: {
    ...mapActions('modals', ['a_closeModal']),
    ...mapActions('admin/genre', ['a_getGenresListNotDetailed']),
    ...mapActions('admin/artist', ['a_getArtist', 'a_createArtist', 'a_updateArtist']),
    getData() {
      this.a_getGenresListNotDetailed();
    },
    async onModalOpen() {
      this.getData();

      if (this.artistId) {
        const { artist } = await this.a_getArtist({ id: this.artistId });
        this.form = {
          name: artist.name,
          description: artist.description,
          country: artist.country,
          genres: artist.genres
        };
      } else {
        this.form = {
          name: '',
          description: '',
          country: '',
          genres: []
        };
      }
    },
    closeModal() {
      this.a_closeModal(this.modalName);
    },
    async addGenre() {
      const payload = {
        name: this.form.name,
        description: this.form.description,
        country: this.form.country,
        genres: this.form.genres
      };
      await this.a_createArtist(payload);
      this.closeModal();
    },
    async editGenre() {
      const payload = {
        name: this.form.name,
        description: this.form.description,
        country: this.form.country,
        genres: this.form.genres,
        id: this.artistId
      };
      await this.a_updateArtist(payload);
      this.closeModal();
    }
  }
};
</script>

<style scoped>

</style>
