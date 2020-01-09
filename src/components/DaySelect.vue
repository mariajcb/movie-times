<template lang="html">
  <div id="day-select">
    <ul class="days">
      <li :class="{ day: true, active: isActive(day) }" v-for="day in days" :key="day.key" v-on:click="selectDay(day)">
        <!-- {{ formatDay(day) }} --> {{ day | moment('ddd MM/DD') }}
      </li>
      <li class="day-selector">
        <span class="dec" v-on:click="changeDay(-1)"></span>
        <span class="inc" v-on:click="changeDay(+1)"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  props: [ 'selected' ],
  data () {
    return {
      days: [ 0, 1, 2, 3, 4, 5, 6 ].map(num => this.$moment(num, 'days'))
    }
  },
  methods: {
    // formatDay(raw) {
    //   if (raw.isSame(this.$moment(), 'day')) {
    //     return 'Today'
    //   } else {
    //     return raw.format('ddd MM/DD')
    //   }
    // },
    isActive(day) {
      return day.isSame(this.selected, 'day')
    },
    selectDay(day) {
      bus.$emit('set-day', day)
    },
    changeDay(change) {
      const newDay = this.$moment(this.selected).add(change, 'days')
      if (this.days.find(day=> newDay.isSame(day, 'day')))
      this.selectDay(newDay)
    }
  }
}
</script>
