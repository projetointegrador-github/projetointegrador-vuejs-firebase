<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',


  mounted() {
    this.$store.dispatch('getCamisetas');
  }


};
</script>

<style>
</style>