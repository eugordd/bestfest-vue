<template>
    <div class="main">
        main
        ARTISTS: {{ artists }}
    </div>
</template>

<script>
import ArtistAPI from '@api/ArtistAPI';

export default {
    name: 'Main',
    data() {
        return {
            artists: []
        };
    },
    created() {
        this.getArtists();
    },
    methods: {
        async getArtists() {
            const { data } = await ArtistAPI.get();
            this.artists = data.artists;
        }
    }
};
</script>

<style scoped>

</style>
