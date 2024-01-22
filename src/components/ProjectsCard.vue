<template>
<div class="card">
    <img :src="`${store.imgPath}${project.image}`" :alt="project.title">
    <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.name }}</p>
    <router-link :to="{ name: 'project-show', params: { slug: project.slug }}" class="btn btn-primary">
        Details
    </router-link>
  </div>
</div></template>

<script>
  import { store } from "../store.js";
    export default {
        name: 'ProjectsCard',
        props: ['project'],

        data() {
        return{
            store,
      };
    },
        
    }
</script>

<style lang="scss" scoped>

</style>