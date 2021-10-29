<template>
  <div class="main">
    <app-header />
    <ui-container>
      <continents-map
        :continents="continents"
        @change="continentsChange"
      />
      <dates
        :date-from="dates.from"
        :date-to="dates.to"
      />
      ARTISTS: {{ artists }}
    </ui-container>
  </div>
</template>

<script>
import ArtistAPI from '@api/admin/ArtistAPI';
import AppHeader from '@components/app/AppHeader';
import UiContainer from '@components/ui/UiContainer';
import ContinentsMap from '@components/main/ContinentsMap';
import Dates from '@components/main/Dates';

export default {
  name: 'Main',
  components: { Dates, ContinentsMap, UiContainer, AppHeader },
  data() {
    return {
      artists: [],
      continents: [],
      dates: {
        from: '',
        to: ''
      }
    };
  },
  created() {
    this.getArtists();
  },
  methods: {
    async getArtists() {
      const { data } = await ArtistAPI.get();
      this.artists = data.artists;
    },
    continentsChange(map) {
      this.continents.includes(map) ?
        this.continents = this.continents.filter(item => item !== map) :
        this.continents.push(map);
    }
  }
};
</script>

<style scoped>

</style>
