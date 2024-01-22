<template>
  <div>

    <AppHeader/>

    <router-view></router-view>

  </div>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";

export default {
  name: "AppHome",

  components: {
    AppHeader
  },

  data() {
    return{

      };
  },

  methods: {

  },

  mounted() {

  }

};
</script>

<style lang="scss" scoped>
  
</style>
