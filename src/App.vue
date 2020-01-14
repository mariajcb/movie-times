<template>
  <div id="app" v-cloak>
    <div id="title">
      <img src="@/assets/logo.png">
      <h1>Vue.js Cinema</h1>
    </div>
    <keep-alive>
      <router-view :genre="genre" :time="time" :movies="movies" :day="day"/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/style.scss';

[v-cloak] {
  display: none!important
}
</style>

<script>
import axios from 'axios'
import moment from 'moment'
import { bus } from './main'

export default {
  data () {
    return {
      genre: [],
      time: [],
      movies: [],
      day: moment("2020-01-04T19:30:00.000Z")
    }
  },
  created() {
    axios.get('/api_sample.json').then(response => {
      this.movies = response.data
    })
    bus.$on('check-filter', this.checkFilter)
    bus.$on('set-day', (day) => { this.day = day })
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
