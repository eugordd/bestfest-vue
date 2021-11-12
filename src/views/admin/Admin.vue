<template>
  <div class="admin">
    <admin-header />
    <ui-container class="admin__container">
      <div class="admin__menu">
        <el-button
          type="primary"
          icon="el-icon-user-solid"
          :plain="!($route.name === 'admin-artists')"
          @click="handleMenuClick('admin-artists')"
        >
          Artists
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-map-location"
          :plain="!($route.name === 'admin-festival')"
          @click="handleMenuClick('admin-festival')"
        >
          Festivals
        </el-button>
        <el-button
          type="primary"
          icon="el-icon-mic"
          :plain="!($route.name === 'admin-genres')"
          @click="handleMenuClick('admin-genres')"
        >
          Genres
        </el-button>
      </div>
      <router-view />
    </ui-container>
  </div>
</template>

<script>
import AdminHeader from '@components/admin/AdminHeader';

export default {
  name: 'Admin',
  components: { AdminHeader },
  methods: {
    handleMenuClick(name) {
      if (this.$route.name !== name) this.$router.push({ name });
    }
  }
};
</script>

<style scoped lang="scss">
.admin {
  &__menu {
    margin: 20px 0;
  }

  &__link {
    color: inherit !important;
    text-decoration: none !important;
    padding: 0 20px;
  }
}

</style>
