<template>
  <div class="main-header-dates">
    <el-date-picker
      class="main-header-dates__datepicker"
      :class="{'main-header-dates__datepicker--inactive': !dates.length }"
      type="monthrange"
      range-separator="–"
      start-placeholder="1 dates"
      end-placeholder=""
      popper-class="bestfest-datepicker-dropdown"
      format="MMM yy"
      :clearable="false"
      :editable="false"
      :value="dates"
      @input="$emit('update:dates', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'MainDates',
  props: {
    dates: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
  .main-header-dates {
    & ::v-deep .el-date-editor--monthrange {
      background-color: transparent !important;
      width: auto;
      cursor: pointer;
      border: none;
      height: auto;
      padding: 0;
    }

    &__datepicker {
      &--inactive {
        & ::v-deep :nth-child(4) {
          display: none;
        }

        & ::v-deep .el-range-separator {
          display: none;
        }
      }

      & ::v-deep .el-range__icon {
        display: none;
      }

      & ::v-deep .el-range-separator {
        font-size: $font-size-xl;
        width: 30px;
        color: #D23A3A;
        line-height: 1;
      }

      & ::v-deep .el-range-input {
        text-align: left;
        background-color: transparent !important;
        color: #D23A3A !important;
        text-transform: uppercase;
        font-size: $font-size-xl;
        width: 200px;
        cursor: pointer;
      }

      & ::v-deep .el-range-input::placeholder {
        color: #D23A3A !important;
        text-transform: uppercase;
      }

      & ::v-deep .el-range__close-icon {
        display: none;
      }
    }
  }

</style>
