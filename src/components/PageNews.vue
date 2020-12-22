<template>

<!-- Sección 1 -->

<div>
    <div class="section-1" id="Acerca de nosotros">
      <div class="container text-center" >
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="pray">
              <img src="..\assets\procreator-ux.jpg" alt="Pray" class="" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="panel text-left">
              <img src="..\assets\NetworkRevolution.jpg" alt="Pray" class="" />
            
              <p class="pt-4 text-justify">
                El mundo cada vez tiene comportamientos mucho más tecnológicos y en cada aspecto de la vida esto se ve plasmado. Dado este comportamiento, las actividades de los jóvenes de hoy en día están relacionadas con dicha tecnología, facilitándoles la accesibilidad a distintas necesidades que puedan tener.
Brindamos metodologías que den el acceso a dicha población para distintas empresas que busquen ofrecer sus servicios a los jóvenes.
Dado que nos parece fascinante el hecho de que muchos jóvenes a pesar de toda la tecnología que se mueve por sus vidas y tantas comodidades, encuentran atractivo en la forma en que se vivía, anteriormente, tomando así parte de su cultura, pero de la misma forma aprovechando todos los beneficios que nos da la era de la tecnología en que nos encontramos.

</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
<divider></divider>
<!-- Sección 2 -->


</div>

</template>

<script>
export default {
  name: "PageNews",
};
</script>
<style scoped>

.section-1 {
  padding: 0vmin 0vmin;
}

.section-1 .row .col-md-6 .pray img {
  opacity: 0.8;
  width: 80%;
  border-radius: 0.2em;
}

.section-1 .row .col-md-6:last-child {
  position: relative;
}

.section-1 .row .col-md-6 .panel {
  position: relative;
  top: 8vmin;
  left: -18vmin;
  background: white;
  border-radius: 3px;
  text-align: left;
  padding: 6vmin 5vmin 12vmin 10vmin;
  box-shadow: 0px 15px 42px #000000;
  font-family: var(--Rubik);
  z-index: 1;
}

.section-1 .row .col-md-6 .panel h1 {
  font-weight: bold;
  padding: 0.4em 0;
  font-size: 2em;
}

.section-1 .row .col-md-6 .panel p {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 768px) {
  header .navbar-brand {
    padding-left: 1rem;
  }
  .section-1 .row .col-md-6 .panel {
    position: initial;
    width: initial;
    height: initial;
  }
}

</style>