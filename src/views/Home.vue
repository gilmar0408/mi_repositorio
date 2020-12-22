<template>

  <div class="home bg-secondary">

    <!-- Sección Header -->
    <page-header></page-header>
    <div class="shadow p-3 mb-5 bg-secondary rounded">Regular shadow</div>
    <!-- Sección Noticias -->
    <page-news></page-news>
    <!-- Sección Integrantes-->

    
    <div class="shadow p-3 mb-5 bg-secondary rounded">Regular shadow</div>
    <!-- Sección API -->
    <div class="seccion-api container-fluid" id="api">
        <section-api></section-api>
    </div>

    
    <div class="shadow p-3 mb-5 bg-secondary rounded">Regular shadow</div>

    <div class="container-fluid  bg-secondary" id="team">
        <div class="row justify-content-center mb-5" >
          <div class="col mt-5" v-for="(item, index) of clientes" :key="index">
            <client-card v-bind:cliente="item"></client-card>
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
import ClientCard from "../components/ClientCard.vue";
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
    ClientCard,
    SectionApi,
  },

  data() {
    return {
      title: "Vivo dentro de VUE",
      clientes: [
        {
          codigo: 1,
          nombre: "Laura Marcela Londoño",
          descripcion: "Este es un ejemplo de un cliente satisfecho con el servicio prestado.",
          rol: "Desarrolladora backend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
        {
          codigo: 2,
          nombre: "Nancy Agudelo Castro",
          descripcion: "Este es un ejemplo de un cliente satisfecho con el servicio prestado.",
          rol: "Desarrolladora frontend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
        {
          codigo: 3,
          nombre: "Gilmar Arley Gonzalez",
          descripcion: "Este es un ejemplo de un cliente satisfecho con el servicio prestado.",
          rol: "Desarrollador backend",
          image: "https://www.fonewalls.com/wp-content/uploads/Night-Minimal-Background-HD-Wallpaper-300x400.jpg",
        },
      ],
    };
  },

  
}
</script>