<template>
  <div class="admin-festivals">
    <admin-search @change="handleSearch" />
    <el-table
      ref="multipleTable"
      :data="festivalsList"
      style="width: 100%"
      @selection-change="handleSelect"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        property="name"
        label="Name"
        width="120"
      />
      <el-table-column
        property="description"
        label="Description"
        width="400"
      />
      <el-table-column
        label="Country"
        width="200"
      >
        <template slot-scope="scope">
          <span>{{ formatCountry(scope.row.country) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        property="genres"
        label="Genres"
      >
        <template slot-scope="scope">
          <span
            v-for="(genre, index) in scope.row.genres"
            :key="index"
          >
            {{ genre.name }},
          </span>
        </template>
      </el-table-column>
      <el-table-column
        property="artists"
        label="Artists"
      >
        <template slot-scope="scope">
          <span
            v-for="(artist, index) in scope.row.artists"
            :key="index"
          >
            {{ artist.name }},
          </span>
        </template>
      </el-table-column>
      <el-table-column width="90">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            circle
            @click="doEdit(scope.row._id)"
          />
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            circle
            @click="doDelete(scope.row._id)"
          />
        </template>
      </el-table-column>
    </el-table>
    <div class="admin-festivals__buttons">
      <div>
        <el-button
          v-if="selected.length"
          type="primary"
          @click="deleteSelected"
        >
          Delete
        </el-button>
      </div>
      <div>
        <el-button
          type="primary"
          @click="doAdd"
        >
          Add
        </el-button>
      </div>
    </div>
    <ui-pagination
      :total="festivalsCount"
      :limits-list="[20, 50, 100]"
      :limit.sync="pagination.limit"
      :page.sync="pagination.page"
      @change="getPaginatedData"
    />
    <festival-modal :festival-id="editFestivalId" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FestivalModal from '@components/admin/festival/FestivalModal';
import { continents, countries } from 'countries-list';
import AdminSearch from '@views/admin/AdminSearch';
import { debounce } from 'lodash/function';

export default {
  name: 'AdminGenres',
  components: { AdminSearch, FestivalModal },
  data() {
    return {
      editFestivalId: null,
      selected: [],
      search: '',
      pagination: {
        page: 1,
        limit: 20,
      },
      debouncedGetData: () => {}
    };
  },
  computed: {
    ...mapState('admin/festival', ['festivalsList', 'festivalsCount']),
  },
  created() {
    this.getPaginatedData();
    this.debouncedGetData = debounce(() => {
      this.getPaginatedData();
    }, 400);
  },
  methods: {
    ...mapActions('admin/festival', ['a_getFestivalsList', 'a_createFestival', 'a_updateFestival', 'a_deleteFestivals']),
    ...mapActions('modals', ['a_openModal']),
    handleSearch(search) {
      this.search = search;
      this.debouncedGetData();
    },
    getPaginatedData() {
      const params = {
        page: this.pagination.page,
        limit: this.pagination.limit,
        search: this.search
      };
      this.a_getFestivalsList(params);
    },
    handleSelect(value) {
      this.selected = value;
    },
    deleteSelected() {
      const payload = {
        ids: this.selected.map(item => item._id)
      };
      this.a_deleteFestivals(payload);
    },
    doAdd() {
      this.editFestivalId = null;
      this.a_openModal('festivalCRUD');
    },
    doEdit(festivalId) {
      this.editFestivalId = festivalId;
      this.a_openModal('festivalCRUD');
    },
    doDelete(id) {
      const payload = {
        ids: [id]
      };
      this.a_deleteFestivals(payload);
    },
    formatCountry(code) {
      const country = countries[code];
      return `${continents[country.continent]}, ${country.name} ${country.emoji}`;
    }
  }
};
</script>

<style scoped lang="scss">
.admin-festivals {
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
}

</style>
