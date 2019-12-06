<template>
  <div id="app">
    <div id="title">
      <img src="@/assets/logo.png">
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <MovieList />
        <MovieFilter />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/style.scss';

</style>

<script>
import MovieFilter from '@/components/MovieFilter.vue'
import MovieList from '@/components/MovieList.vue'

export default {
  components: {
    MovieFilter,
    MovieList
  }
}
</script>
