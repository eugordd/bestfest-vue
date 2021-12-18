<template>
  <div class="festivals-rating">
    <festivals-rating-item
      v-for="festival in festivals"
      :key="festival._id"
      :festival="festival"
    />
  </div>
</template>

<script>
import FestivalsRatingItem from '@components/main/FestivalsRatingItem';
export default {
  name: 'FestivalsRating',
  components: { FestivalsRatingItem },
  props: {
    festivals: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
