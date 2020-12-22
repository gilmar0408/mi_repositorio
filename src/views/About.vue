<template>
  <!-- Sección 1 -->
  <div class="seccion-superior">
    <header class="header">
      <div class="barra">
        <nav
          class="contenedor-menu navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
        >
          <div class="titulo-principal">
            <a class="bg-dark w-100 navbar-brand" href="# ">
              <img
                src="../assets/icon.jpg"
                width="30 "
                height="30
                            "
                class="d-inline-block align-top"
                alt=" "
                loading="lazy "
              />
              Network Revolution
            </a>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav "
          >
            <ul class="menu-principal navbar-nav">
              <li class="menu-principal__item nav-item">
                <a class="nav-link" @click.prevent="irInicio" >Inicio</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" @click.prevent="irInicio" >Acerca de nosotros</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" @click.prevent="irInicio" >Servicios</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" @click.prevent="irInicio" >Clientes</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a  @click.prevent="irServicios"   class="nav-link" >Mas información servicios</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" @click.prevent="irInicio" >Contacto</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a  @click.prevent="login"   class="nav-link" >Iniciar sesión</a>
              </li>
              


              
            </ul>
          </div>
        </nav>
      </div>

      

      
        
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

        
      
    </header>

    <page-about></page-about>

    <about-details class=" bg-secondary text-white  "></about-details>

    <page-footer></page-footer>

  </div>
  <!-- Fin Sección 1 -->
</template>

<script>
import AboutDetails from '../components/AboutDetails.vue';
import PageAbout from '../components/PageAbout.vue';
import PageFooter from '../components/PageFooter.vue';
export default {
  components: { PageAbout, PageFooter, AboutDetails },
  name: "PageHeader",
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          src: "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png",
        },
        {
          src: "https://cdn.pixabay.com/photo/2015/11/05/09/52/touch-screen-1023966_960_720.jpg",
        },
      ],
    };
  },

  methods: {

      login(){

          this.$router.push('/login');
      },
      irServicios(){

          this.$router.push('/about');
      },
      irInicio(){

        this.$router.push('/');

      }
      
  }
};
</script>