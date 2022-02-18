<template>
  <div class="festivals-rating-item">
    <h4>{{ festival.name }}</h4>
    <div>{{ festival.description }}</div>
    <div>
      <h4>Matched artists:</h4>
      <div class="festivals-rating-item__artists">
        <artist-tag
          v-for="artist in festival.matchedArtists"
          :key="artist._id"
          :artist="artist.name"
          :priority="artist.priority"
          :selected="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArtistTag from '@components/main/old/ArtistTag';
export default {
  name: 'FestivalsRatingItem',
  components: { ArtistTag },
  props: {
    festival: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.festivals-rating-item {
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 12px 16px;
  margin: 16px 0;

  &__artists {
    margin: 0 -4px;
  }
}

</style>
