<template>
  <div class="main-header-dates">
    <!--    <ui-title text="1 dates" :interactive="true" />-->
    <el-date-picker
      class="main-header-dates__datepicker"
      :class="{'main-header-dates__datepicker--inactive': !dateRange.length }"
      type="monthrange"
      range-separator="–"
      start-placeholder="1 dates"
      end-placeholder=""
      popper-class="bestfest-datepicker-dropdown"
      format="MMM yy"
      :clearable="false"
      :editable="false"
      v-model="dateRange"
    />
  </div>
</template>

<script>
export default {
  name: 'MainDates',
  data() {
    return {
      dateRange: []
    };
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
        font-size: $font-size-lg;
        width: 30px;
        color: #D23A3A;
        line-height: 1;
      }

      & ::v-deep .el-range-input {
        text-align: left;
        background-color: transparent !important;
        color: #D23A3A !important;
        text-transform: uppercase;
        font-size: $font-size-lg;
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
