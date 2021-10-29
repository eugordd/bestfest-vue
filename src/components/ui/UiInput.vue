<template>
  <div class="ui-input">
    <input
      :id="id"
      :name="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      class="ui-input__input"
      :class="{
        'ui-input__input--no-border': trimBorder,
        'ui-input__input--white': theme === 'white',
        'ui-input__input--transparent': theme === 'transparent',
        'ui-input__input--error': error,
      }"
      @input="onInput"
      @change="onChange"
    >
    <div v-if="error" class="ui-input__error-msg">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: ''
    },
    trimBorder: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    theme: {
      type: String,
      default: 'white',
      validator: value => ['white', 'transparent'].includes(value)
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMsg: {
      type: String,
      default: '',
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-input {
  &__input {
    padding-left: 18px;
    padding-right: 18px;
    height: 50px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: border-color 0.4s ease-out;

    @include for-size(xs-sm) {
      font-size: 12px;
      line-height: 18px;
    }

    @include for-size(md) {
      font-size: 16px;
      line-height: 24px;
    }

    &--white {
      border: 1px solid $blue-light;
      color: $blue-light;
    }

    &--transparent {
      border: 1px solid $white;
      color: $white;
      background: transparent;

      &::placeholder {
        color: $white !important;
      }
    }

    &--no-border {
      border-top: 0;
    }

    &--error {
      border-color: $red-light;
    }
  }
  &__error-msg {
    position: absolute;
    font-size: 10px;
    color: $red-light;

    @include for-size(xs-only) {
      margin-top: 2px;
      font-size: 8px;
    }
  }
}
</style>
