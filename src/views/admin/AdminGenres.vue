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
    </el-table>
    <div style="margin-top: 20px">
      <el-button
        type="primary"
        @click="a_openModal('genreCRUD')"
      >
        Add new genre
      </el-button>
      <el-button
        v-if="selected.length"
        type="primary"
        @click="deleteSelected"
      >
        Delete selected
      </el-button>
    </div>
    <!--    <genre-modal :genre-id="editGenreId" />-->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GenreModal from '@components/admin/genres/GenreModal';

export default {
  name: 'AdminGenres',
  components: { GenreModal },
  data() {
    return {
      newGenre: {
        name: '',
        symlinks: []
      },
      editGenreId: null,
      selected: []
    };
  },
  computed: {
    ...mapState('admin', ['genres']),
  },
  created() {
    this.a_getGenres();
  },
  methods: {
    ...mapActions('admin', ['a_getGenres', 'a_createGenre', 'a_updateGenre', 'a_deleteGenres']),
    ...mapActions('modals', ['a_openModal']),
    handleSelect(value) {
      this.selected = value;
    },
    deleteSelected() {
      const payload = {
        ids: this.selected.map(item => item._id)
      };
      this.a_deleteGenres(payload);
    }
  }
};
</script>

<style scoped>

</style>
