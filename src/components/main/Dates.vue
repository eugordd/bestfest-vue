<template>
  <div class="dates">
    <ui-button class="dates__button" @click="setYear('this')">
      this year
    </ui-button>
    <ui-button class="dates__button" @click="setYear('next')">
      next year
    </ui-button>
    <date-picker is-range v-model="range">
      <template v-slot="{ inputValue, inputEvents }">
        <input
          :value="inputValue.start"
          v-on="inputEvents.start"
        >
        <input
          :value="inputValue.end"
          v-on="inputEvents.end"
        >
      </template>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import UiButton from '@components/ui/UiButton';

export default {
  name: 'Dates',
  components: {
    UiButton,
    DatePicker
  },
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
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 1),
      }
    };
  },
  methods: {
    setYear(year) {
      if (year === 'this') {

      }

    },

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