<template>
  <div class="dates">
    <el-date-picker
      type="daterange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      v-model="range"
    />
  </div>
</template>

<script>
export default {
  name: 'Dates',
  props: {
    dateFrom: {
      type: Date,
      required: true
    },
    dateTo: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      range: [
        new Date(2020, 0, 1),
        new Date(2020, 0, 1),
      ]
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.dates {
  display: flex;

  &__button {
    display: flex;
  }
}
</style>
