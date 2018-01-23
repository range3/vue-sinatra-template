<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#app{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#content{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
