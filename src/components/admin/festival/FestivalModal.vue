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
          placeholder="Choose festival genres"
          no-data-text="To create genres switch to 'Genres' in menu"
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
      <el-form-item label="Place">
        <el-input v-model="form.place" />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          v-model="form.period"
        />
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
            v-for="item in artistsListNotDetailed"
            :key="item._id"
            :label="item.name"
            :value="item._id"
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
import { countries } from 'countries-list';

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
        country: '',
        place: '',
        period: [],
        genres: [],
        artists: []
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['isModalOpened']),
    ...mapState('admin/genre', ['genresListNotDetailed']),
    ...mapState('admin/artist', ['artistsListNotDetailed']),
    header() {
      return this.festivalId ? 'Edit festival' : 'Add festival';
    },
    countriesList() {
      return Object.entries(countries);
    }
  },
  methods: {
    ...mapActions('modals', ['a_closeModal']),
    ...mapActions('admin/genre', ['a_getGenresListNotDetailed']),
    ...mapActions('admin/artist', ['a_getArtistsListNotDetailed']),
    ...mapActions('admin/festival', ['a_getFestival', 'a_createFestival', 'a_updateFestival']),
    getData() {
      this.a_getArtistsListNotDetailed();
      this.a_getGenresListNotDetailed();
    },
    async onModalOpen() {
      this.getData();

      if (this.festivalId) {
        const { festival: { artists, country, dateEnd, dateStart, description, genres, name, place } } =
          await this.a_getFestival({ id: this.festivalId });

        this.form = {
          name,
          description,
          country,
          place,
          period: [dateStart, dateEnd],
          genres,
          artists: artists.map(item => item._id)
        };
      } else {
        this.form = {
          name: '',
          description: '',
          country: '',
          place: '',
          period: [],
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
        country: this.form.country,
        place: this.form.place,
        dateStart: this.form?.period[0],
        dateEnd: this.form?.period[1],
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
        country: this.form.country,
        place: this.form.place,
        dateStart: this.form?.period?.[0],
        dateEnd: this.form?.period?.[1],
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
