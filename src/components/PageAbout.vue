<template>
  <div class="d-flex container-fluid justify-content-end pb-2 bg-secondary">
    <div class="row mt-5">
      <div class="col-lg-12 text-center">
        <div class="row">
          <!--tarjeta 1-->
          <div
            class="col-lg-6 col-md-12 mb-4 "
            v-for="(articulos, index) of articulos"
            :key="index"
          >
            <div
              class="card-section border rounded p-3"
              style="background-color: #f8f9fa"
            >
              <div class="card-header-first rounded pb-5">
                <h4 class="card-header-title text-white pt-3">
                  {{ articulos.nombre }}
                </h4>
              </div>
              <div class="card-body text-center">
                <div class="imagen-servicio mb-5">
                  <img
                    :src="articulos.imagen"
                    alt="imagen"
                    heigth="200px"
                    width="220px"
                  />
                </div>

                <p class="card-text text-justify">{{ articulos.descripcion }}</p>
                <br />
                <button class="btn btn-lg btn-secondary">Más info</button>
              </div>
            </div>
          </div>

          
          
          
        </div>

        

        
      </div>

      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PageAbout",
  data() {
    return {
      articulos: null,
    };
  },
  mounted() {
    axios
      .get(/* petición para pruebas locales `http://localhost:3000/api/articulo/listActive` */ `https://whispering-everglades-53693.herokuapp.com/api/articulo/listActive` )
      .then((response) => {
        this.articulos = response.data;
        console.log(this.articulos);
      });
  },
};
</script>