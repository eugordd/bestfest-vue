<template>
  <el-dialog
    :visible="isModalOpened(modalName)"
    :title="header"
    @close="closeModal"
  >
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Symlinks">
        <el-select
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="Add genre symlinks"
          no-data-text="Type and press enter"
          v-model="form.symlinks"
        />
      </el-form-item>
      <el-form-item>
        <el-button
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'GenreModal',
  props: {
    genreId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modalName: 'genreCRUD',
      form: {
        name: '',
        symlinks: []
      }
    };
  },
  computed: {
    ...mapGetters('modals', ['isModalOpened']),
    header() {
      return this.genreId ? 'Edit genre' : 'Add genre';
    }
  },
  methods: {
    ...mapActions('modals', ['a_closeModal']),
    ...mapActions('admin', ['a_createGenre']),
    closeModal() {
      this.a_closeModal(this.modalName);
    },
    addGenre() {
      const payload = {
        name: this.form.name,
        symlinks: this.form.symlinks
      };
      this.a_createGenre(payload);
    }
  }
};
</script>

<style scoped>

</style>
