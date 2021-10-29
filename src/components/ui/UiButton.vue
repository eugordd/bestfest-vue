<template>
  <div
    class="ui-button"
    :class="buttonClasses"
    :style="buttonStyle"
    @click="handleClick"
  >
    <a
      v-if="href"
      class="ui-button__link"
      :href="href"
      target="_blank"
    >
      <slot v-if="hasIcon" name="icon" />
      <slot />
    </a>
    <template v-else-if="to">
      <router-link :to="to" class="ui-button__link">
        <slot v-if="hasIcon" name="icon" />
        <slot />
      </router-link>
    </template>
    <template v-else>
      <slot v-if="hasIcon" name="icon" />
      <slot />
    </template>
  </div>
</template>

<script>
import colors from '@global/colors';

export default {
  name: 'UiButton',
  props: {
    type: {
      type: String,
      default: 'filled',
      validator: value => ['filled', 'outline'].includes(value)
    },
    color: {
      type: String,
      default: '$blue-light',
    },
    size: {
      type: String,
      default: 'sm',
      validator: value => ['xs', 'sm', 'md', 'lg'].includes(value)
    },
    href: {
      type: String,
      default: () => ''
    },
    to: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    buttonClasses() {
      return {
        'ui-button--icon': this.hasIcon,
        'ui-button--xs': this.size === 'xs',
        'ui-button--sm': this.size === 'sm',
        'ui-button--md': this.size === 'md',
        'ui-button--lg': this.size === 'lg'
      };
    },
    buttonStyle() {
      const color = colors[this.color] ? colors[this.color] : this.color;

      if (this.type === 'filled') return {
        background: color,
        borderColor: color,
        color: colors['$white'],
      };

      if (this.type === 'outline') return {
        background: colors['$white'],
        borderColor: color,
        color,
      };

      return {};
    },
    hasIcon() {
      return Boolean(this.$slots.icon);
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  box-sizing: border-box;

  cursor: pointer;
  transition-property: transform;
  transition-duration: .4s;

  & + & {
    margin-left: 16px;

    @include for-size(xs-sm) {
      margin-left: 8px;
    }
  }

  &__link {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit !important;
  }

  &--xs {
    height: 24px;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  &--sm {
    height: 28px;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  &--md {
    height: 34px;
    padding-left: 28px;
    padding-right: 28px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  &--lg {
    height: 42px;
    padding-left: 32px;
    padding-right: 32px;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
  }

  &__icon {
    width: 52px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
