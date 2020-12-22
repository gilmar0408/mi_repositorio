<template>
  <div class="card bg-dark text-white mb-3" style="max-width: 540px">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="cliente.image" class="card-img mb-3" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ cliente.nombre }}</h5>
          <p class="card-text">{{ cliente.descripcion }}</p>
          
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="card text-white bg-dark mb-5" >
                <div class="d-flex justify-content-center align-items-center">
                    <img class="mt-5" :src="member.image" alt="foto integrante">
                </div>
                 <div class="card-body " >
                    <h3 class="card-title"><span>Nombre: </span> {{member.nombre}}</h3>
                    <p class="card-text"> <span>Código: </span> {{member.codigo}} </p>
                    <p class="card-text"> <span>Rol: </span>{{member.rol}} </p>
                    <p class="card-text text-justify"> <span>Descripción: </span>{{member.descripcion}} </p>
                 </div>
        </div> -->
</template>

<script>
export default {
  name: "clientCard",
  props: ["cliente"],
};
</script>

<style scoped>
</style>
