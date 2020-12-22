<template>

  <div class="home bg-secondary">

    <!-- Sección Header -->
    <page-header></page-header>
    
    <!-- Sección Noticias -->
    <page-news></page-news>
    <!-- Sección Integrantes-->

    
    
    <!-- Sección API -->
    <div class="seccion-api container-fluid" id="api">
        <section-api></section-api>
    </div>

    
    
    <page-cases></page-cases>

    <page-stats></page-stats>
    
    
    
    <!-- Sección Footer -->
    <page-footer></page-footer>
    
    
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import PageFooter from "../components/PageFooter.vue";
import ClientCard from "../components/ClientCard.vue";
import SectionApi from "../components/SectionApi.vue";
import PageHeader from "../components/PageHeader.vue";
import PageNews from "../components/PageNews";
import PageStats from "../components/PageStats.vue";
import PageCases from "../components/PageCases.vue";


export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageFooter,
    PageHeader,
    PageNews,
    ClientCard,
    SectionApi,
    PageCases,
    PageStats
  },


}
</script>