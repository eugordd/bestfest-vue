<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <div
        v-if="isSettingsState"
        :key="isSettingsState"
        class="main__settings"
      >
        <main-header
          :dates.sync="dates"
          :place.sync="place"
        />
        <main-artists
          :artists.sync="artists"
        />
        <transition name="fade">
          <main-find-festivals
            v-if="isFormFilled"
            @click.native="findFestivals"
          />
        </transition>
      </div>
      <div v-else class="main__festivals">
        <main-chosen
          :dates="dates"
          :place="place"
          :artists="artists"
          @change-state="isSettingsState = true;"
        />
        <main-festivals
          :festivals="festivalsRatedList"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import MainHeader from '@components/main/header/MainHeader';
import MainArtists from '@components/main/artists/MainArtists';
import MainFindFestivals from '@components/main/festivals/MainFindFestivals';
import MainChosen from '@components/main/chosen/MainChosen';
import { mapActions, mapState } from 'vuex';
import MainFestivals from '@components/main/festivals/MainFestivals';

export default {
  name: 'MainNew',
  components: { MainFestivals, MainChosen, MainFindFestivals, MainArtists, MainHeader },
  data() {
    return {
      dates: [],
      artists: [],
      place: '',
      isSettingsState: true
    };
  },
  computed: {
    ...mapState('app/festival', ['festivalsRatedList']),
    isFormFilled() {
      return this.dates.length && this.artists.length && this.place;
    }
  },
  methods: {
    ...mapActions('app/festival', ['a_findFestivals']),
    async findFestivals() {
      const payload = {
        continents: [this.place],
        dateStart: this.dates[0] || null,
        dateEnd: this.dates[1] || null,
        artists: this.artists.map(item => ({ _id: item._id, priority: item.priority }))
      };
      await this.a_findFestivals(payload);
      this.isSettingsState = false;
    }
  }
};
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    background: url("/paper-texture.jpg");
    background-size: 50%;
    width: 100%;
    height: 100%;

    &__settings {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
</style>
