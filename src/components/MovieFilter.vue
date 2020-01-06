<template lang="html">
  <div id="movie-filter">
    <h2>Filter Results </h2>
    <h3>By time of day</h3>
    <div class="filter-group">
      <check-filter v-for="time in times" category="time" :key="time.key" :title="time"></check-filter>
    </div>
    <h3>By genre</h3>
    <div class="filter-group">
      <check-filter v-for="genre in genres" category="genre" :key="genre.key" :title="genre"></check-filter>
    </div>
  </div>
</template>

<script>
import CheckFilter from './CheckFilter.vue'
import genres from '@/util/genres.js'
import times from '@/util/times.js'

export default {
  data () {
    return {
      genres,
      times
    }
  },
  components: {
    CheckFilter
  }
}
</script>

<style lang="css" scoped>
</style>
