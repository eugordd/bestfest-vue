<template>
  <div class="ui-pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="limit"
      :current-page="page"
      @current-change="changePage"
    />
    <!--    <el-button-group>-->
    <div>
      <el-button
        v-for="item in limitsList"
        :key="item"
        :type="item === limit ? 'primary' : 'default'"
        size="mini"
        @click="changeLimit(item)"
      >
        {{ item }}
      </el-button>
    </div>
    <!--    </el-button-group>-->
  </div>
</template>

<script>
export default {
  name: 'UiPagination',
  props: {
    page: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true
    },
    limitsList: {
      type: Array,
      default: () => [20, 50, 100]
    }
  },
  methods: {
    changePage(page) {
      this.$emit('update:page', page);
      this.$emit('change');
    },
    changeLimit(limit) {
      this.$emit('update:limit', limit);
      this.$emit('change');
    }
  }
};
</script>

<style scoped lang="scss">
.ui-pagination {
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
