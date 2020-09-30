<template>
  <div>
    <Header/>
    <div>
        <center><BodyMap/></center>
    </div>
  </div>
</template>


<script>
import Header from "./components/Header";
import BodyMap from "./components/BodyMap";


export default {
  name: 'App',
  components: {
      Header,
      BodyMap
  }
};
</script>

<style>
    body{background-color:lightblue;}

</style>
