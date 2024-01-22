<template>
    <div class="container" v-if="project">

      <h1>{{ project.title }}</h1>
      <img :src="`${store.imgPath}${project.image}`" :alt="project.title">
      <h4 class="card-title">Name repository: {{ project.name }}</h4>
      <h5 class="card-title">Type: {{ project.type.name }}</h5>
      <p class="card-text">Description: {{ project.description }}</p>

    </div>
  </template>
  
  <script>
    import axios from "axios";
  import { store } from "../store.js";

  export default {
    name: "AppProjectsShow",
  
    data() {
      return{
        store,
        project: null,
        };
    },
  
    methods: {
      getProjectData() {
        console.log(this.$route)
      }

    },
  
    mounted() {
      this.getProjectData();
      axios
        .get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
          console.log(res.data)
          if (res.data.result) {
            this.project = res.data.result
          } else {
            this.$router.push({ name: 'not-found'})
          }
        })
    }
  
  };
  </script>
  
  <style lang="scss" scoped>
    
  </style>
  