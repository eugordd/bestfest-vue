<template>
  <div class="app-header">
    <ui-container>
      <div class="app-header">
        <div class="app-header__left">
          <slot
            v-if="isLeftSlotExist"
            name="left"
          />
          <router-link v-else :to="{ name: 'main' }">
            <app-logo />
          </router-link>
        </div>
        <div class="app-header__right">
          <slot name="right" />
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script>
import AppLogo from '@components/app/AppLogo';
import UiContainer from '@components/ui/UiContainer';

export default {
  name: 'AppHeader',
  components: { UiContainer, AppLogo },
  computed: {
    isLeftSlotExist() {
      return !!this.$slots.left;
    }
  }
};
</script>

<style scoped lang="scss">
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }
</style>
