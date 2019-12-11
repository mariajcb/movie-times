<template lang="html">
  <div :class="{ 'check-filter': true, active: checked }">
    <span class="checkbox"></span>
    <span class="check-filter-title" @click="checkFilter">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      checked: false
    }
  },
  methods: {
    checkFilter () {
      this.checked = !this.checked
      this.$emit('check-filter', 'genre', this.title, this.checked)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
