<template lang="html">
  <div id="movie-list">
    <div class="movie" v-for="movie in filteredMovies" :key="movie.title">
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
import genres from '@/util/genres.js'

export default {
  data () {
    return {
      movies: [
        { title: 'Pulp Fiction', genre: genres.CRIME },
        { title: 'Home Alone', genre: genres.COMEDY },
        { title: 'Austin Powers', genre: genres.COMEDY },
      ]
    }
  },
  props: ['genre', 'time'],
  computed: {
    filteredMovies () {
      return this.movies.filter(this.moviePassesGenreFilter)
    }
  },
  methods: {
    moviePassesGenreFilter (movie) {
      if (!this.genre.length) {
        return true
      } else {
        return this.genre.find(genre => movie.genre === genre)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
