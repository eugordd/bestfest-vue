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
          default-first-option
          placeholder="Choose festival genres"
          no-data-text="To create genres switch to 'Genres' in menu"
          v-model="form.genres"
        >
          <el-option
            v-for="item in genres"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Artists">
        <el-select
          multiple
          filterable
          default-first-option
          placeholder="Choose festival artists"
          no-data-text="To create artists switch to 'Artists' in menu"
          v-model="form.artists"
        >
          <el-option
            v-for="item in artistsList"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="festivalId"
          type="primary"
          @click="editFestival"
        >
          Edit
        </el-button>
        <el-button
          v-if="!festivalId"
          type="primary"
          @click="addFestival"
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
  name: 'FestivalModal',
  props: {
    festivalId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modalName: 'festivalCRUD',
      form: {
        name: '',
        description: '',
        genres: [],
        artists: []
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['isModalOpened']),
    ...mapState('admin/genre', ['genres']),
    ...mapState('admin/artist', ['artistsList']),
    header() {
      return this.festivalId ? 'Edit festival' : 'Add festival';
    }
  },
  methods: {
    ...mapActions('modals', ['a_closeModal']),
    ...mapActions('admin/genre', ['a_getGenresList']),
    ...mapActions('admin/artist', ['a_getArtistsList']),
    ...mapActions('admin/festival', ['a_getFestival', 'a_createFestival', 'a_updateFestival']),
    getData() {
      this.a_getArtistsList();
      this.a_getGenresList();
    },
    async onModalOpen() {
      this.getData();

      if (this.festivalId) {
        const { festival } = await this.a_getFestival({ id: this.festivalId });
        this.form = {
          name: festival.name,
          description: festival.description,
          genres: festival.genres,
          artists: festival.artists
        };
      } else {
        this.form = {
          name: '',
          description: '',
          genres: [],
          artists: []
        };
      }
    },
    closeModal() {
      this.a_closeModal(this.modalName);
    },
    async addFestival() {
      const payload = {
        name: this.form.name,
        description: this.form.description,
        genres: this.form.genres,
        artists: this.form.artists,
      };
      await this.a_createFestival(payload);
      this.closeModal();
    },
    async editFestival() {
      const payload = {
        name: this.form.name,
        description: this.form.description,
        genres: this.form.genres,
        artists: this.form.artists,
        id: this.festivalId
      };
      await this.a_updateFestival(payload);
      this.closeModal();
    }
  }
};
</script>
