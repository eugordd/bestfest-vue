<template>
  <div class="main-header-place">
    <el-select
      placeholder="2 Place"
      popper-class="bestfest-select-dropdown"
      :value="place"
      @input="$emit('update:place', $event)"
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
import continents from '@global/continents';

export default {
  name: 'MainPlace',
  props: {
    place: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      continents
    };
  }
};
</script>

<style scoped lang="scss">
  .main-header-place {
    & ::v-deep .el-input {
      font-size: $font-size-xl;
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
