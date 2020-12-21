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

    

    <div class="container-fluid  bg-secondary" id="team">
        <div class="row justify-content-center mb-5" >
          <div class="col mt-5" v-for="(item, index) of team" :key="index">
            <team-card v-bind:member="item"></team-card>
          </div>
          
        </div>
    </div>
    
    
    <!-- Sección Footer -->
    <page-footer></page-footer>
    
    
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import PageFooter from "../components/PageFooter.vue";
import TeamCard from "../components/TeamCard.vue";
import SectionApi from "../components/SectionApi.vue";
import PageHeader from "../components/PageHeader.vue";
import PageNews from "../components/PageNews";
import PageServices from "../components/PageServices.vue";


export default {
  name: 'Home',
  components: {
    HelloWorld,
    PageFooter,
    PageHeader,
    PageNews,
    PageServices,
    TeamCard,
    SectionApi,
  },

  data() {
    return {
      title: "Vivo dentro de VUE",
      team: [
        {
          codigo: 1,
          nombre: "Laura Marcela Londoño",
          descripcion: "Estudiante de Ingeniería de Sistemas de la Universidad del Quindío. Actualmente tiene 20 años y su pasatiempo es tocar guitarra.",
          rol: "Desarrolladora backend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
        {
          codigo: 2,
          nombre: "Nancy Agudelo Castro",
          descripcion: "Ingeniera Industrial de la Universidad de Ibagué. Actualmente tiene 23 años y su pasatiempo es jugar baloncesto.",
          rol: "Desarrolladora frontend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
        {
          codigo: 3,
          nombre: "Gilmar Arley Gonzalez",
          descripcion: "Estudiante de Ingeniería de Sistemas de la Universidad El Bosque. Actualmente tiene 25 años y su pasatiempo es el ciclismo.",
          rol: "Desarrollador backend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
      ],
    };
  },

  
}
</script>