<template>
  <div>
    <p>home page</p>
    <router-link to="/about">about</router-link>
    <router-link to="/app">app</router-link>
    <counter></counter>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'

export default {
  name: 'Home',
  components: {
    Counter,
  },
}
</script>
