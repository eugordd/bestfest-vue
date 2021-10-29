<template>
  <app-header>
    <template v-slot:right>
      <ui-button @click="doLogout">
        Log Out
      </ui-button>
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
    ...mapActions('adminAuth', ['a_logout']),
    doLogout() {
      this.a_logout();
    }
  }
};
</script>

<style scoped>

</style>
