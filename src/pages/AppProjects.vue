<template>
  
  <main class="container">
    <h1>AppProjects</h1>

    <div class="row justify-content-center ">
      <div class="col-4" v-for="project in projects" :key="project.id">
        <ProjectsCard :project="project"/>
      </div>

      <nav class="col-auto ">
        <ul class="pagination mt-4">
          <li class="page-item"><button @click="previousPage()" class="page-link">Previous</button></li>
          <li class="page-item"><button class="page-link">1</button></li>
          <li class="page-item"><button class="page-link">2</button></li>
          <li class="page-item"><button class="page-link">3</button></li>
          <li class="page-item"><button @click="nextPage()" class="page-link">Next</button></li>
        </ul>
      </nav>
      
    </div>
  </main>

  </template>
  
  <script>

  import axios from "axios";
  import { store } from "../store.js";
  import ProjectsCard from '../components/ProjectsCard.vue';
  
  export default {
  
    name: "AppProjects",

    components: {
      ProjectsCard,
    },
  
    data() {
      return{
        store,
        projects: [],
        currentPage: 1,
        lastPage: 0,
      };
    },
  
    methods: {
      getAllProjects() {
        axios
          .get(store.apiUrl + "/projects", { params: { page: this.currentPage } }).then((res) => {
            console.log(res.data);
            this.projects = res.data.result.data;
            console.log(this.projects);
  
            this.currentPage = res.data.result.current_page;
            this.lastPage = res.data.result.last_page;
          })
      },
  
      nextPage(){
        if (this.currentPage < this.lastPage){
          this.currentPage = this.currentPage + 1;
          this.getAllProjects();  
        }
      },
      
      previousPage(){
        this.currentPage = this.currentPage - 1;
        this.getAllProjects();
      }
    },
  
    mounted() {
      this.getAllProjects();
    }
  
  };
  </script>
    
  <style lang="scss" scoped>
    
  </style>
  