<template lang="html">
  <div :class="{ 'check-filter': true, active: checked }" @click="checkFilter">
    <span class="checkbox"></span>
    <span class="check-filter-title">{{ title }}</span>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  props: ['title', 'category'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    checkFilter () {
      this.checked = !this.checked
      bus.$emit('check-filter', this.category, this.title, this.checked)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
