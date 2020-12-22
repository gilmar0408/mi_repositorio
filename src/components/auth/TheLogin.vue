<template>


    <form class="login   text-white bg-dark mt-5 mb-5" style="width:18rem;"  >
      <div class="form-group  mt-3 ml-3 mr-3">
        <label for="exampleInputEmail1">Correo electrónico</label>
        <input 
          v-model="login.email"
          type="email"
          class="form-control display:flex whidth:50px;  "
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Nunca compartiremos su correo electrónico con nadie.</small
        >
      </div>
      <div class="form-group ml-3 mr-3">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          v-model="login.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />

        <!-- <pre>

            {{ login }}

        </pre> -->
      </div>

      <div class="botones row justify-content-center  mb-5">
      <div class="botonlogin">
      <button @click.prevent="loginUser" type="submit" class="btn btn-success mt-5 mb-3">
        Iniciar sesión
      </button>
      </div>
      
      </div>
    </form>
  
</template>


<script>

import swal from 'sweetalert';
import VueJwDecode from 'vue-jwt-decode'
import axios from 'axios';
export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  beforeCreate(){

    this.$store.dispatch('autoLogin')? this.$router.push('/autenticado') : false;

  },


  methods: {
    loginUser() {
      axios.post('http://localhost:3000/api/usuario/login', this.login)
      .then(response => {

        return response.data;

      })
      .then( data => {

        this.$store.dispatch("guardarToken", data.tokenReturn)
        this.$router.push('/autenticado');
        swal("Éxito!!", "Login correcto", "success");
        console.log(data);

      })
      .catch(error=>{
        swal("Oops!", "Algo salió mal!", "error");
        /* console.log(err.response); */
        console.log(error)
        return error;

      })
      
    },
  },
};
</script>