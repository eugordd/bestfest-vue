<template>
  <app-header>
    <template v-slot:right>
      <el-button
        type="primary"
        size="mini"
        @click="doLogout"
      >
        Log Out
      </el-button>
    </template>
  </app-header>
</template>

<script>
import AppHeader from '@components/app/AppHeader';
import { mapActions } from 'vuex';
export default {
  name: 'AdminHeader',
  components: { AppHeader },
  methods: {
    ...mapActions('admin/auth', ['a_logout']),
    doLogout() {
      this.a_logout();
    }
  }
};
</script>

<style scoped>

</style>
