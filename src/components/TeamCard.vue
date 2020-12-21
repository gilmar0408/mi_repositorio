<template>
    
    
        <div class="card text-white bg-dark mb-5" >
                <div class="d-flex justify-content-center align-items-center">
                    <img class="mt-5" :src="member.image" alt="foto integrante">
                </div>
                 <div class="card-body " >
                    <h3 class="card-title"><span>Nombre: </span> {{member.nombre}}</h3>
                    <p class="card-text"> <span>Código: </span> {{member.codigo}} </p>
                    <p class="card-text"> <span>Rol: </span>{{member.rol}} </p>
                    <p class="card-text text-justify"> <span>Descripción: </span>{{member.descripcion}} </p>
                 </div>
        </div>
    
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
