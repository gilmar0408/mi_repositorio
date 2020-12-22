<template >

    
  <div class="row mt-md-3 mt-sm-3 mt-xs-3 mb-md-3 mb-sm-3 mb-xs-3 text-white bg-dark">
        <div class="col-lg-6 col-xs-12" v-for="(articulos,index) of articulos" :key="index">
                <div class="d-flex justify-content-center" >
                    <div class="p-3">
                        <div class="imagen-servicio">
                            <img :src="articulos.imagen" alt="imagen" heigth="200px" width="220px">
                        </div>
                        
                    </div>
                    <div class="p-2 text-justify">
                        <div class="titulo-movie">
                            <h3>{{articulos.nombre}}</h3>
                        </div>
                        <p class="text-justify">
                            
                            <p>{{articulos.resumen}}</p> 
                        </p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end
                pb-2 mt-n2">
                    <!--button type="button" class="btn btn-dark-->
                    <button @click.prevent="infoServicios" type="submit" class="btn btn-success mt-5 mb-3">Info</button>
                </div>
    </div>
</div>



    

    
</template>

<script>
import axios from "axios";
export default {
  name: "SectionApi",
  data() {
    return {
      articulos: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/api/articulo/listActive`)
      .then((response) => {
        this.articulos = response.data;
        console.log(this.articulos);
      });
  },
  methods: {
    infoServicios() {
      this.$router.push("/about");
    },
  },
};
</script>
<style scoped>
</style>