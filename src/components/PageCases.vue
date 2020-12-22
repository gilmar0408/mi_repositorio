<template>
    <section class="section-2 container-fluid p-0">
      <div class="cover">
        <div class="overlay"></div>
        <div class="content text-center">
          <h1>Algunas de las características que nos hacen únicos</h1>
          <p>
            Nuestras cifras son validadas por nuestros partners del sector tecnología.
          </p>
        </div>
      </div>
      <div class="container-fluid text-center">
        <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div class="rect">
            <h1>53</h1>
            <p>Socios estratégicos nacionales</p>
          </div>
          <div class="rect">
            <h1>7</h1>
            <p>Socios estratégicos internacionales</p>
          </div>
          <div class="rect">
            <h1>523</h1>
            <p>Proyectos exitosos</p>
          </div>
          <div class="rect">
            <h1>12</h1>
            <p>Años de experiencia en el sector</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: "PageCases",
}


</script>

<style scoped>

.cover {
  width: 100%;
  height: 60vmin;
  background: url("../assets/success.png");
  background-position: -24rem -19rem;
  background-size: 150%;
  position: relative;
}

.cover .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.cover .content {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 19vmin;
}

.cover .content > h1 {
  font-family: var(--Patua);
  font-size: 6vmin;
  color: whitesmoke;
}

.cover .content > p {
  font-family: var(--Rubik);
  font-size: 2vmin;
  color: #e5e5e5;
}

.numbers .rect {
  position: relative;
  z-index: 1;
  background: white;
  width: 17rem;
  height: 12rem;
  padding-top: 3.5vmin;
  margin: 1rem;
  border-radius: 0.5em;
  box-shadow: 1px 2px 50px 0px rgba(255, 0, 0, 0.349);
}

.numbers {
  margin-top: -15vmin;
}

.numbers .rect h1 {
  font-size: 5rem;
  color: tomato;
}

.numbers .rect > p {
  font-family: var(--Patua);
}


</style>