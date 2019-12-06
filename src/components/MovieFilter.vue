<template lang="html">
  <div id="movie-filter">
    <h2>Filter Results </h2>
    <div class="filter-group">
      <check-filter v-for="genre in genres" :key="genre.key"></check-filter>
    </div>
  </div>
</template>

<script>
import CheckFilter from './CheckFilter.vue'
import genres from '@/util/genres.js'

export default {
  components: {
    CheckFilter
  },
  data () {
    return {
      genres
    }
  }
}
</script>

<style lang="css" scoped>
</style>
