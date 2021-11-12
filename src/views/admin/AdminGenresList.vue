<template>
  <div class="admin-genres">
    <el-table
      ref="multipleTable"
      :data="genres"
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
    <genre-modal :genre-id="editGenreId" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GenreModal from '@components/admin/genre/GenreModal';

export default {
  name: 'AdminGenres',
  components: { GenreModal },
  data() {
    return {
      editGenreId: null,
      selected: []
    };
  },
  computed: {
    ...mapState('admin/genre', ['genres']),
  },
  created() {
    this.a_getGenresList();
  },
  methods: {
    ...mapActions('admin/genre', ['a_getGenresList', 'a_createGenre', 'a_updateGenre', 'a_deleteGenres']),
    ...mapActions('modals', ['a_openModal']),
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
