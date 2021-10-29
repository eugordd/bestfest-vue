<template>
  <div
    class="ui-modal"
    :class="{
      'ui-modal--opened': value,
      'ui-modal--indented': indented
    }"
    @click="closeModal"
  >
    <div
      class="ui-modal__container"
      @click.stop
    >
      <div
        v-if="$slots.header || header"
        class="ui-modal__header"
        :class="{'ui-modal__header--text': !$slots.header}"
      >
        <slot v-if="$slots.header" name="header" />
        <h2 v-else-if="header">
          {{ header }}
        </h2>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    indented: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:value', false);
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
  .ui-modal {
    display: none;
    z-index: 1000;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    &--opened {
      display: block;
    }

    &--indented &__container {
      padding: 20px;
    }

    &__header {
      padding: 0 20px;
    }

    &__container {
      position: absolute;
      background: $white;
      width: 100%;
      max-width: 600px;
      height: auto;
      min-height: 300px;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
