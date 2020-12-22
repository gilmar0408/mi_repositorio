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
                <a class="nav-link" href="">Inicio</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" href="#news">Quienes somos</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" href="#api">Servicios</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" href="#team">Clientes</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a  @click.prevent="irServicios"   class="nav-link" >Mas información servicios</a>
              </li>
              <li class="menu-principal__item nav-item">
                <a class="nav-link" href="#footer">Contacto</a>
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
  </div>
  <!-- Fin Sección 1 -->
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
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
      }
  }
};
</script>

<style scoped>
</style>