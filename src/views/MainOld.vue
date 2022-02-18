<template>
  <div class="main">
    <app-header />
    <ui-container class="main__container">
      <div class="main__filters">
        <continents-map
          :continents="continents"
          @change="continentsChange"
        />
        <div>
          <el-date-picker
            type="daterange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            v-model="dateRange"
          />
        </div>
        <br>
        <div>
          <el-input
            placeholder="Search artists"
            prefix-icon="el-icon-search"
            v-model="search"
            @input="debouncedSearchArtists"
          />
        </div>
        <br>
        <div>
          <artist-tag
            v-for="(artist, index) in selectedArtists"
            :key="artist._id"
            :artist="artist.name"
            :priority="artist.priority"
            :selected="true"
            :closable="true"
            @click="raiseArtistPriority(index)"
            @close="unselectArtist(index)"
          />
          <artist-tag
            v-for="artist in showedArtists"
            :key="artist._id"
            :artist="artist.name"
            @click="selectArtist(artist)"
          />
        </div>
        <br>
        <div>
          <el-button type="primary" size="small" @click="findFestivals">
            Find Your Festivals
          </el-button>
        </div>
      </div>
      <div class="main__result">
        <h1>Your Top Rated Festivals</h1>
        <festivals-rating :festivals="festivalsRatedList" />
      </div>
    </ui-container>
  </div>
</template>

<script>
import AppHeader from '@components/app/AppHeader';
import UiContainer from '@components/ui/UiContainer';
import ContinentsMap from '@components/main/old/ContinentsMap';

import ArtistAPI from '@api/app/ArtistAPI';
import { debounce } from 'lodash/function';
import { mapActions, mapState } from 'vuex';
import FestivalsRating from '@components/main/old/FestivalsRating';
import ArtistTag from '@components/main/old/ArtistTag';

export default {
  name: 'Main',
  components: { ArtistTag, FestivalsRating, ContinentsMap, UiContainer, AppHeader },
  data() {
    return {
      artists: [],
      selectedArtists: [],
      continents: ['AF', 'EU', 'NA', 'SA', 'AS', 'OC'],
      dateRange: [],
      search: '',
      debouncedSearchArtists: null,
      debouncedSortArtists: null
    };
  },
  computed: {
    ...mapState('app/festival', ['festivalsRatedList']),
    showedArtists() {
      return this.artists.filter(artist =>
        !this.selectedArtists.map(item => item._id).includes(artist._id));
    }
  },
  created() {
    this.debouncedSearchArtists = debounce(() => {
      this.getArtists();
    }, 400);
    this.debouncedSortArtists = debounce(() => {
      this.sortArtists();
    }, 2000);
    this.getArtists();
  },
  methods: {
    ...mapActions('app/festival', ['a_findFestivals']),
    async getArtists() {
      const params = {
        search: this.search
      };
      const { data } = await ArtistAPI.getList({ params });
      this.artists = data.artists;
    },
    continentsChange(map) {
      this.continents.includes(map) ?
        this.continents = this.continents.filter(item => item !== map) :
        this.continents.push(map);
    },
    sortArtists() {
      this.selectedArtists.sort((a, b) => {
        return b.priority - a.priority;
      });
    },
    selectArtist(artist) {
      const selectedArtist = {
        ...artist,
        priority: 1
      };
      this.selectedArtists.push(selectedArtist);
      this.debouncedSortArtists();
    },
    raiseArtistPriority(index) {
      if (this.selectedArtists[index].priority < 3) {
        this.selectedArtists[index].priority ++;
      } else {
        this.selectedArtists[index].priority = 1;
      }
      this.debouncedSortArtists();
    },
    artistSize(priority) {
      switch (priority) {
        case 1:
          return 'small';
        case 2:
          return 'medium';
        case 3:
          return 'default';
      }
      return 'small';
    },
    artistType(priority) {
      switch (priority) {
        case 1:
          return '';
        case 2:
          return 'warning';
        case 3:
          return 'danger';
      }
      return '';
    },
    unselectArtist(index) {
      this.selectedArtists.splice(index, 1);
      this.debouncedSortArtists();
    },
    findFestivals() {
      const payload = {
        continents: this.continents,
        dateStart: this.dateRange[0] || null,
        dateEnd: this.dateRange[1] || null,
        artists: this.selectedArtists.map(item => ({ _id: item._id, priority: item.priority }))
      };
      this.a_findFestivals(payload);
    }
  }
};
</script>

<style scoped lang="scss">
  .main {
    &__container {
      display: flex;
    }

    &__filters {
      width: 50%;
    }

    &__result {
      width: 50%;
    }
  }
</style>
