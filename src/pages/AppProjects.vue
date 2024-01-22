<template>
    <div>

        <h1>AppProjects</h1>

        <ul>
        <li v-for="project in projects" :key="project.id">
            {{ project.title }}
        </li>
        </ul>
        <button @click="previousPage()">Indietro</button>
        <button @click="nextPage()">Avanti</button>

    </div>
  </template>
  
  <script>

  import axios from "axios";
  import { store } from "../store.js";
  
  export default {
  
    name: "AppProjects",
  
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
  