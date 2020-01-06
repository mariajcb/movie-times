<template lang="html">
  <div id="overview">
    <div class="main">
      <MovieList :genre="genre" :time="time" :movies="movies" :day="day"/>
      <MovieFilter/>
    </div>
  </div>
</template>

<script>
import MovieFilter from './MovieFilter.vue'
import MovieList from './MovieList.vue'

export default {
  props: ['genre', 'time', 'movies', 'day'],
  components: {
    MovieFilter,
    MovieList
  }
}
</script>

<style lang="css" scoped>
</style>
