<template>
  <div class="festivals-rating-item">
    <h4>{{ festival.name }}</h4>
    <div>{{ festival.description }}</div>
    <div>
      <h4>Matched artists:</h4>
      <el-tag
        v-for="artist in festival.matchedArtists"
        :key="artist._id"
        :disable-transitions="false"
        effect="dark"
        type="success"
        size="small"
      >
        {{ artist.name }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FestivalsRatingItem',
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
  margin: 8px 0;
}

</style>
