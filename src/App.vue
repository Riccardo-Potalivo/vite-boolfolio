<template>
  <div>
    <h1>Ciao !</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";
import { store } from "./store.js";

export default {

  name: "App",

  data() {
    return{
      store,
      projects: [],
    };
  },

  methods: {
    getAllProjects() {
      axios
        .get(store.apiUrl + "/projects").then((res) => {
          console.log(res.data);
          this.projects = res.data.result.data;
          console.log(this.projects);
        })
    }
  },

  mounted() {
    this.getAllProjects();
  }

};
</script>

<style lang="scss" scoped>
  
</style>
