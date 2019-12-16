<template lang="html">
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster" alt="">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <h2>{{ movie.Title}}</h2>
        <span class="movie-rating">{{ movie.Rated }}</span>
      </div>
      <div class="movie-sessions">
        <div v-for="session in sessions" :key="session.session_id" class="session-time-wrapper">
          <div class="session-time">
            {{ session.time | moment('h:mm A') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie', 'sessions', 'day']
  // methods: {
  //   filteredSessions(sessions) {
  //     return sessions.filter(session => {
  //       return this.$moment(session.time).isSame(this.day, 'ddd')
  //     })
  //   }
  // }
}
</script>
