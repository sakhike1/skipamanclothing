<template>
  <div ref="container" class="keen-slider" style="height: 500px">
    <div id="keen-slider__slide" class="keen-slider__slide number-slide2">
      <img id="image1" class="object-contain h-full w-full  bg-gradient-to-r from-rose-400 to-orange-300"
        :src="require('@/assets/image51.png')" />
    </div>
    <div id="keen-slider__slide2" class="keen-slider__slide number-slide3">
      <img id="image2" class="object-contain h-full w-full   bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        :src="require('@/assets/image53.png')" />
    </div>
    <div id="keen-slider__slide3" class="keen-slider__slide number-slide4">
      <img id="image3" class="object-contain h-full w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
        :src="require('@/assets/image55.png')" />
    </div>
    <div id="keen-slider__slide4" class="keen-slider__slide number-slide5">
      <img id="image4" class="object-contain h-full w-full   bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400"
        :src="require('@/assets/image54.png')" />
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 60000, easing: (t) => t };

export default {
  components: {},
  setup() {
    const [container] = useKeenSlider({
      loop: true,
      renderMode: "performance",
      drag: false,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
    return { container };
  },
};
</script>

<style scope>
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 500;
  height: auto;
  max-height: 100vh;
  border-style: none;
}

.number-slide1 {}

.number-slide2 {}



.number-slide3 {}



.number-slide4 {}

.number-slide5 {}

.number-slide6 {}




@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide #image1 {
  object-fit: contain;
  height: 500px;
 
  }
}



@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide2 #image2 {
  object-fit: contain;
  height: 500px;
 
  }
}


@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #image {
  height: 600px;
  object-fit: contain;
 
  }
}


@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #image4 {
  
  height: 500px;
 
  }
}



</style>
