<template>


    <div>
    <!-- Image and text -->

    
    <nav class="navbar navbar-light" style="background-color: #267E60">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Network Revolution
        
      </a>
      <button  @click.prevent="irAtras" type="button" class="btn btn-light">Home</button>
    </nav>

    <div class="login row justify-content-center bg-secondary">
      <the-login></the-login>
    </div>
  </div>



    
</template>

<script>
import TheLogin from '../components/auth/TheLogin.vue'
export default {
  components: { TheLogin },

  methods: {

      irAtras(){

          this.$router.push('/');
      }
  }
    
}
</script>