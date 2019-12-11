<template>
  <div id="app">
    <div id="title">
      <img src="@/assets/logo.png">
      <h1>Vue.js Cinema</h1>
    </div>
    <div id="overview">
      <div class="main">
        <MovieList :genre="genre" :time="time"/>
        <MovieFilter v-on:check-filter="checkFilter"/>
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
  data () {
    return {
      genre: [],
      time: []
    }
  },
  components: {
    MovieFilter,
    MovieList
  },
  methods: {
    checkFilter (category, title, checked) {
      if (checked) {
        this[category].push(title)
      } else {
        let index = this[category].indexOf(title)
        if (index > -1 ) {
          this[category].splice(index, 1)
        }
      }
    }
  }
}
</script>
