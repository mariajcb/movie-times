<template lang="html">
  <div id="detail" v-if="movie">
    <movie-item :movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{ movie.Genre }}</p>
        <p class="movie-plot">{{ movie.Plot }}</p>
        <table>
          <tr>
            <td>
              Release date:
            </td>
            <td>
              {{ movie.Released }}
            </td>
          </tr>
          <tr>
            <td>
              Running time:
            </td>
            <td>
              {{ movie.Runtime }}
            </td>
          </tr>
          <tr>
            <td>
              Director:
            </td>
            <td>
              {{ movie.Director }}
            </td>
          </tr>
          <tr>
            <td>
              Cast:
            </td>
            <td>
              {{ movie.Actors }}
            </td>
          </tr>
        </table>
      </div>
    </movie-item>
    <div class="home">
      <router-link :to="{ name: 'home' }">Back to Results</router-link>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'

export default {
  props: ['movies'],
  components: {
    MovieItem
  },
  computed: {
    movie () {
      const movie = this.movies.find(movie => movie.id === this.$route.params.id)
      return movie ? movie.movie : null
    }
  },
  created () {
    console.log(this.$route);
  }
}
</script>

<style lang="css" scoped>
</style>
