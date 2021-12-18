<template>
  <div class="admin-genres">
    <admin-search @change="handleSearch" />
    <el-table
      ref="multipleTable"
      :data="genresList"
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
        property="symlinks"
        label="Symlinks"
      >
        <template slot-scope="scope">
          <span
            v-for="(symlink, index) in scope.row.symlinks"
            :key="index"
          >
            {{ symlink }},
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
    <div class="admin-genres__buttons">
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
      :total="genresCount"
      :limits-list="[20, 50, 100]"
      :limit.sync="pagination.limit"
      :page.sync="pagination.page"
      @change="getPaginatedData"
    />
    <genre-modal :genre-id="editGenreId" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GenreModal from '@components/admin/genre/GenreModal';
import AdminSearch from '@views/admin/AdminSearch';
import { debounce } from 'lodash';

export default {
  name: 'AdminGenres',
  components: { AdminSearch, GenreModal },
  data() {
    return {
      editGenreId: null,
      selected: [],
      search: '',
      pagination: {
        page: 1,
        limit: 20
      },
      debouncedGetData: () => {}
    };
  },
  computed: {
    ...mapState('admin/genre', ['genresList', 'genresCount']),
  },
  created() {
    this.getPaginatedData();
    this.debouncedGetData = debounce(() => {
      this.getPaginatedData();
    }, 400);
  },
  methods: {
    ...mapActions('admin/genre', ['a_getGenresList', 'a_createGenre', 'a_updateGenre', 'a_deleteGenres']),
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
      this.a_getGenresList(params);
    },
    handleSelect(value) {
      this.selected = value;
    },
    deleteSelected() {
      const payload = {
        ids: this.selected.map(item => item._id)
      };
      this.a_deleteGenres(payload);
    },
    doAdd() {
      this.editGenreId = null;
      this.a_openModal('genreCRUD');
    },
    doEdit(genreId) {
      this.editGenreId = genreId;
      this.a_openModal('genreCRUD');
    },
    doDelete(id) {
      const payload = {
        ids: [id]
      };
      this.a_deleteGenres(payload);
    }
  }
};
</script>

<style scoped lang="scss">
.admin-genres {
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
}

</style>
