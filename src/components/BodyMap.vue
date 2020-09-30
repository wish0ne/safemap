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
        :lat="37" :lng="127" @click="onMarkerClicked1" @load="onMarkerLoaded"/>
      <naver-marker
        :lat="37" :lng="127.5" @click="onMarkerClicked2" @load="onMarkerLoaded"/>
    </naver-maps>
    </div>
     <div id="Content"><h3>Information</h3>
        <a id="href" href=""><img id="img" src="" width="400" ></a>
       <p id="1"></p>
       <p id="2"></p>
     </div>
  </div>   
</template>

<script>
export default{
    name: 'APP',

   data() {
      return {
        width: 600,
        height: 600,
        marker: null,
        map: null,
        isCTT: true,
        useStyleMap: true,
        mapOptions: {
          lat: 37,
          lng: 127,
          zoom: 10,
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
        alert("찌밤");
        
      },
      onMarkerClicked1() {

          document.getElementById("1").innerHTML="우리집"; 
          document.getElementById("2").innerHTML="경상남도 거제시";
          document.getElementById("href").href="https://www.google.com/search?q=%EA%B1%B0%EC%A0%9C%EB%8F%84&sxsrf=ALeKk00NsiXVr0CyXdqi4XFE6ZUK_EaABg:1601047500427&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZ6p_czoTsAhWMfd4KHaCfBGEQ_AUoAnoECCAQBA&biw=1707&bih=748&dpr=1.13#imgrc=GSEYWekugOJptM";
          document.getElementById("img").src="https://img7.yna.co.kr/etc/inner/KR/2019/12/26/AKR20191226044800052_01_i_P2.jpg";
        
      },
      onMarkerClicked2(){
          document.getElementById("1").innerHTML="친구집"; 
          document.getElementById("2").innerHTML="경상남도 진주시";
          document.getElementById("href").href="https://www.google.com/search?q=%EC%A7%84%EC%A3%BC%EC%8B%9C&sxsrf=ALeKk00tnlJpcSoJdT-fuYZjWiiD7Czalw:1601205830763&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiUyYTGnInsAhVReXAKHQhaBsUQ_AUoAnoECB8QBA&biw=1707&bih=803&dpr=1.13";
          document.getElementById("img").src="https://www.polinews.co.kr/data/photos/20191252/art_15770679041656_39882c.jpg";
        
      },
      onMarkerLoaded(vue) {
        vue.marker.setDraggable(false).setCursor('move').setClickable(true);
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
    font-family:serif;
    border-radius : 40px 40px 40px 40px / 40px 40px 40px 40px;
  }
</style>
