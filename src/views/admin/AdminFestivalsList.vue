<template>
  <div class="admin-festivals">
    <el-table
      ref="multipleTable"
      :data="festivals"
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
        width="200"
      />
      <el-table-column
        property="genres"
        label="Genres"
      >
        <template slot-scope="scope">
          <span
            v-for="(genre, index) in scope.row.genres"
            :key="index"
          >
            {{ genre }},
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
            {{ artist }},
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
    <festival-modal :festival-id="editFestivalId" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FestivalModal from '@components/admin/festival/FestivalModal';

export default {
  name: 'AdminGenres',
  components: { FestivalModal },
  data() {
    return {
      editFestivalId: null,
      selected: []
    };
  },
  computed: {
    ...mapState('admin/festival', ['festivals']),
  },
  created() {
    this.a_getFestivalsList();
  },
  methods: {
    ...mapActions('admin/festival', ['a_getFestivalsList', 'a_createFestival', 'a_updateFestival', 'a_deleteFestivals']),
    ...mapActions('modals', ['a_openModal']),
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
    doEdit(genreId) {
      this.editFestivalId = genreId;
      this.a_openModal('festivalCRUD');
    },
    doDelete(id) {
      const payload = {
        ids: [id]
      };
      this.a_deleteFestivals(payload);
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
