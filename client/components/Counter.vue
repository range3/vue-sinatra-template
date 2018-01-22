<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    localComputed () {
      return null
    },
    ...mapState('counter', [
      'count',
    ]),
  },
  methods: mapActions('counter', [
    'increment',
    'decrement',
  ]),
}
</script>
