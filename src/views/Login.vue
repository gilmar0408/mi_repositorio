<template>


    <div>
    <!-- Image and text -->

    
    <nav class="navbar navbar-light" style="background-color: #267E60">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.jpg"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Network Revolution
        
      </a>
      <button  @click.prevent="irAtras" type="button" class="btn btn-light">Inicio</button>
    </nav>

    

    <div class="login row justify-content-center bg-secondary">
      <the-login></the-login>
    </div>

    <page-cases></page-cases>

  </div>



    
</template>

<script>
import TheLogin from '../components/auth/TheLogin.vue'
import PageCases from '../components/PageCases.vue';
export default {
  components: { TheLogin, PageCases },

  methods: {

      irAtras(){

          this.$router.push('/');
      }
  }
    
}
</script>