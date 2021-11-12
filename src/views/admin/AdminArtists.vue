<template>
  <div class="admin-artists">
    <el-table
      ref="multipleTable"
      :data="artists"
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
    <div class="admin-artist__buttons">
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
    <artist-modal :artist-id="editArtistId" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ArtistModal from '@components/admin/artist/ArtistModal';

export default {
  name: 'AdminArtists',
  components: { ArtistModal },
  data() {
    return {
      editArtistId: null,
      selected: []
    };
  },
  computed: {
    ...mapState('admin/artist', ['artists']),
  },
  created() {
    this.a_getArtistsList();
  },
  methods: {
    ...mapActions('admin/artist', ['a_getArtistsList', 'a_createArtist', 'a_updateArtist', 'a_deleteArtists']),
    ...mapActions('modals', ['a_openModal']),
    handleSelect(value) {
      this.selected = value;
    },
    deleteSelected() {
      const payload = {
        ids: this.selected.map(item => item._id)
      };
      this.a_deleteArtists(payload);
    },
    doAdd() {
      this.editArtistId = null;
      this.a_openModal('artistCRUD');
    },
    doEdit(artistId) {
      this.editArtistId = artistId;
      this.a_openModal('artistCRUD');
    },
    doDelete(id) {
      const payload = {
        ids: [id]
      };
      this.a_deleteArtists(payload);
    }
  }
};
</script>

<style scoped lang="scss">
.admin-artist {
  &__buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
}

</style>
