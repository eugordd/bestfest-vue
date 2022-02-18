<template>
  <div class="main-header-place">
    <el-select
      placeholder="2 Place"
      popper-class="bestfest-select-dropdown"
      v-model="place"
    >
      <el-option
        v-for="item in continents"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'MainPlace',
  data() {
    return {
      place: '',
      continents: [
        { name: 'africa', code: 'AF' },
        { name: 'asia', code: 'AS' },
        { name: 'europe', code: 'EU' },
        { name: 'n. america', code: 'NA' },
        { name: 's. america', code: 'SA' },
        { name: 'oceania', code: 'OC' }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
  .main-header-place {
    & ::v-deep .el-input {
      font-size: $font-size-lg;
      width: 310px;
    }

    & ::v-deep .el-input__inner {
      padding: 0;
      border: none;
      background: none;
      height: auto;
      line-height: 1;
      color: #D23A3A;
      text-transform: uppercase;

      &::placeholder {
        color: #D23A3A;
      }
    }

    & ::v-deep .el-input__suffix {
      display: none;
    }
  }
</style>
