<template>
  <div>
    Ciao !
  </div>
</template>

<script>

import axios from "axios";
import { store } from "./store";

export default {

  name: "App",

  data() {
    return{
      store,
      projects: []
    };
  },

  methods: {
    getAllProjects() {
      axios
        .get(store.apiUrl + "/projects").then((res) => {
          console.log(res.data);
          // this.projects = res.data.response;
          console.log(this.projects);
        })
    }
  },

};
</script>

<style lang="scss" scoped>
  
</style>
