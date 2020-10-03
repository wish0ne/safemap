<template>
  <div>
    <div id="Map">
    <naver-maps 
        :height="height"
        :width="width"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        :useStyleMap="useStyleMap"
        @load="onLoad">   
      <naver-marker 
        :lat="35.230268" :lng="128.659574" @click="onMarkerClicked1" @load="onMarkerLoaded"/>     
    </naver-maps>
    </div>
     <div id="Content"><h3 style="font-family:serif;">Information</h3>
        <a id="href" href=""><img id="img" src="" width="400" height="200"></a>
       <p style="font-size:1.2em; font-family:arial" id="1"></p>
       <p id="2"></p>
       <p id="3"></p>
       <p id="4"></p>
     </div>
  </div>   
</template>

<script>
export default{

    name: 'APP',

   data() {
      return {
        latArray: [],
        width: 600,
        height: 600,
        marker: null,
        map: null,
        isCTT: true,
        useStyleMap: true,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 6,
          zoomControl: true,
          zoomControlOptions: {position: 'TOP_RIGHT'},
          mapTypeControl: true, 
        },
        initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE', 'CTT']
      }
    },
    methods: {
 
      onLoad(vue)
      {
        this.map = vue;
        
      },
      onMarkerClicked1() {

          document.getElementById("1").innerHTML="창원과학체험관"; 
          document.getElementById("2").innerHTML="경상남도 창원시 의창구 충혼로 72번길 16";
          document.getElementById("3").innerHTML="미래 과학자의 소중한 꿈을 키워 나갈 수 있도록 자라나는 꿈나무들에게<br/> 과학을 쉽고 재미있게 즐기면서 배울 수 있는 과학체험관이다."
          document.getElementById("4").innerHTML="화장실/주차장/카페테리아"
          document.getElementById("href").href="https://www.google.com/search?q=%EC%B0%BD%EC%9B%90%EA%B3%BC%ED%95%99%EC%B2%B4%ED%97%98%EA%B4%80&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLmK6XgZjsAhWIF6YKHbGsDRsQ_AUoAXoECB8QAw&biw=1707&bih=803&dpr=1.13#imgrc=PIQM65yyvywS8M&imgdii=N16bwpuv8VbHZM";
          document.getElementById("img").src="https://lh3.googleusercontent.com/proxy/MzzR5H0KLDaSKO2HD_IRcArYwXS2-GRGVtUoBtknBzwuAocl8mgZdL1r_tb8RRc6bU-r54QnJVuY75l3ZsmI3mUfYd7GOHXWMFetNf5NbzxPu_zC9E2DnwVnrzuYAslqaXysp1N0fKGdfB9lEmtq7mKdww0mjanS9KKngg_AfC05y7erN-X8gt7IHg52IGj6NJa-1L2Y2QBAKZiPwUcUNSJ-BB2uC_3PsWrLpknEoNGc1Khf3RPDK0NLkK6U980jZg8Kt1j96swoW9X6VQZJahOzQstJ87MUh5bjtJ9Pbo0iUoYr6_s";

      },
     
      onMarkerLoaded(vue) {
        this.marker=vue;
        vue.marker.setDraggable(false)//.setClickable(true);
      },
    }

  }

</script>

<style scoped>

  #Map {
    float:left;
    width:800px;
    height:700px;

  }

  #Content {
    background-color: white;
    background-color: rbga(255, 255, 255, 0.5);
    text-align:center;
    float:left;
    width:600px;
    height:600px;
    font-family:monospace;
    border-radius : 40px 40px 40px 40px / 40px 40px 40px 40px;
  }


</style>
