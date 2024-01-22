<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li v-for="(item, index) in menuItems"  :key="index">
            <router-link class="nav-link" :to="{name: item.routeName}">{{ item.label }}</router-link>
        </li>
        
      </ul>

    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",

        data() {
            return {
                menuItems: [
                    {
                        label: "Home",
                        routeName: "home",
                    },
                    {
                        label: "Projects",
                        routeName: "projects",
                    },
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>