<template lang="html">
  <div id="movie-list">
    <div class="movie" v-for="movie in movies" :key="movie.title">
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [
        { title: 'Pulp Fiction' },
        { title: 'Home Alone' },
        { title: 'Austin Powers' },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
