<template>
  <div class="main-festivals">
    <ui-container class="main-festivals__tags">
      <div
        v-for="(festival, index) in festivals"
        :key="festival._id"
        class="main-festivals__tag"
        :class="{'main-festivals__tag--active': festivalIndex === index}"
        @click="selectFestival(index)"
      >
        {{ festival.shortName }}
      </div>
    </ui-container>
    <main-festivals-info
      :festival="currentFestival"
    />
  </div>
</template>

<script>
import MainFestivalsInfo from '@components/main/festivals/MainFestivalsInfo';
export default {
  name: 'MainFestivals',
  components: { MainFestivalsInfo },
  props: {
    festivals: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      festivalIndex: undefined
    };
  },
  computed: {
    currentFestival() {
      return this.festivals[this.festivalIndex];
    }
  },
  methods: {
    selectFestival(festival) {
      this.festivalIndex = festival;
    }
  }
};
</script>

<style scoped lang="scss">
  .main-festivals {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    &__tags {
      display: flex;
      flex-wrap: wrap;
    }

    &__tag {
      font-size: $font-size-xl;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0 16px;

      &--active {
        color: $main-color;
        opacity: 1;
        text-decoration: underline;
      }
    }
  }
</style>
