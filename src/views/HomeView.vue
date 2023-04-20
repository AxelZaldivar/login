<template>
  <div id="main_wrapper">
    <div id="main_title">
      <h1>Firebase page with vue</h1>
    </div>

    <div id="banner_image">
      <p>Para acceder a la lista de tareas registrate o inicia sesión</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "Dayrom";
  src: url("Home/fonts/dayrom.eot");
  src: url("Home/fonts/dayrom.eot?#iefix") format("embedded-opentype"),
    url("Home/fonts/dayrom.woff") format("woff"),
    url("Home/fonts/dayrom.ttf") format("truetype"),
    url("Home/fonts/dayrom.svg#Dayrom") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "BallparkWeiner";
  src: url("Home/fonts/ballpark.eot");
  src: url("Home/fonts/ballpark.eot?#iefix") format("embedded-opentype"),
    url("Home/fonts/ballpark.woff") format("woff"),
    url("Home/fonts/ballpark.ttf") format("truetype"),
    url("Home/fonts/ballpark.svg#BallparkWeiner") format("svg");
  font-weight: normal;
  font-style: normal;
}

/* Main elements of the page */
#main_wrapper {
  background: url("Home/images/azul.jpg");
  color: rgb(255, 255, 255);
  width: 900px;
  margin: auto;
  border-radius: 15px;
}

#main_title h1 {
  font-family: "BallparkWeiner", serif;
  font-size: 2.5em;
  font-weight: normal;
  margin: 20px;
  display: flex;
  justify-content: center;
}

#banner_image {
  margin-top: 15px;
  height: 350px;
  border-radius: 5px;
  background: url("Home/images/Fondo.png") no-repeat;
  background-size: 100%;
  position: relative;
  box-shadow: 0px 4px 4px #1c1a19;
  background-color: rgb(175, 238, 238);
  text-align: right;
  color: black;
  font-family: "Dayrom", serif;
  font-weight: 1000;
  font-size: xx-large;
  display: flex;
  justify-content: center;
}
</style>