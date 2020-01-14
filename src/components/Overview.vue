<template lang="html">
  <div id="overview">
    <!-- <DaySelect :selected="day" /> -->
    <div class="main">
      <MovieList :genre="genre" :time="time" :movies="movies" :day="day"/>
      <MovieFilter />
    </div>
  </div>
</template>

<script>
import MovieFilter from './MovieFilter'
import MovieList from './MovieList'
// import DaySelect from './DaySelect'

export default {
  props: ['genre', 'time', 'movies', 'day'],
  components: {
    MovieFilter,
    MovieList,
    // DaySelect
  }
}
</script>

<style lang="css" scoped>
</style>
