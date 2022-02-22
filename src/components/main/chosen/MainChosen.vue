<template>
  <div class="main-chosen">
    <ui-container class="main-chosen__container">
      <div class="main-chosen__content" @click="$emit('change-state')">
        <div class="main-chosen__rect" />
        <div class="main-chosen__header">
          <div class="main-chosen__dates">
            {{ dateFormat(dates[0]) }} – {{ dateFormat(dates[1]) }}
          </div>
          <div class="main-chosen__line" />
          <div class="main-chosen__place">
            {{ continentName }}
          </div>
        </div>
        <div class="main-chosen__tags">
          <main-artist-tag
            v-for="artist in artists"
            :key="artist._id"
            :artist="artist.name"
            :priority="artist.priority"
            :thumbnail="true"
          />
        </div>
      </div>
      <div class="main-chosen__title">
        Your Top&nbsp;5 Festivals
      </div>
    </ui-container>
  </div>
</template>

<script>
import continents from '@global/continents';
import MainArtistTag from '@components/main/artists/MainArtistTag';

export default {
  name: 'MainChosen',
  components: { MainArtistTag },
  props: {
    dates: {
      type: Array,
      default: () => []
    },
    place: {
      type: String,
      default: ''
    },
    artists: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    continentName() {
      return continents.find(item => item.code === this.place).name;
    }
  },
  methods: {
    dateFormat(dateStr) {
      const date = new Date(dateStr);
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.toLocaleString('default', { year: '2-digit' });

      return `${month} ${year}`;
    }
  }
};
</script>

<style scoped lang="scss">
  .main-chosen {
    &__container {
      display: flex;
      position: relative;
      min-height: 200px;
    }

    &__content {
      position: relative;
      max-width: 550px;
      padding-right: 45px;
      opacity: .3;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }

    &__title {
      font-size: $font-size-xl;
      text-transform: uppercase;
      margin-left: 45px;
      margin-top: 40px;
      color: $main-color;
      width: 320px;
    }

    &__header {
      display: flex;
      align-items: center;
      width: 100%;
      padding-top: 40px;
      padding-bottom: 24px;
    }

    &__dates {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      font-size: $font-size-md;
      text-transform: uppercase;
      color: #D23A3A;
      line-height: 1;
    }

    &__line {
      display: flex;
      height: 2px;
      width: 100%;
      background: #000;
      margin: 0 20px;
      max-width: 150px;
    }

    &__place {
      display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      font-size: $font-size-md;
      text-transform: uppercase;
      color: #D23A3A;
      line-height: 1;
    }

    &__rect {
      position: absolute;
      height: 100%;
      width: calc(100vw + 4px);
      border-right: $border-default;
      border-bottom: $border-default;
      right: 0;
    }

    &__tags {
      margin-left: -8px;
      padding-bottom: 40px;
    }
  }
</style>
