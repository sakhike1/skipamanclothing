<template>
  <div ref="container" class="keen-slider" style="height: 550px">
    <div id="keen-slider__slide1" class="keen-slider__slide number-slide2">
      <img
        class="object-contain h-full w-full bg-gradient-to-r from-slate-500 to-yellow-100"
        :src="require('@/assets/trending1.png')"
      />
    </div>
    <div id="keen-slider__slide2" class="keen-slider__slide number-slide3">
      <img
        class="object-contain h-full w-full bg-gradient-to-r from-slate-500 to-yellow-100"
        :src="require('@/assets/trending2.png')"
      />
    </div>
    <div id="keen-slider__slide3" class="keen-slider__slide number-slide4">
      <img
        class="object-contain h-full w-full bg-gradient-to-r from-slate-500 to-yellow-100"
        :src="require('@/assets/trending4.png')"
      />
    </div>
    <div id="keen-slider__slide4" class="keen-slider__slide number-slide5">
      <img
        class="object-contain h-full w-full bg-gradient-to-r from-slate-500 to-yellow-100"
        :src="require('@/assets/trending6.png')"
      />
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
  height: 300px;
  max-height: 100vh;
  border-style: none;
}

.number-slide1 {
}

.number-slide2 {
}

.number-slide3 {
}

.number-slide4 {
}

.number-slide5 {
}

.number-slide6 {
}

@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide1 img {
    object-fit: contain;
    height: 500px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide2 img {
    object-fit: contain;
    height: 500px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide3 img {
    object-fit: contain;
    height: 500px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {
  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide4 img {
    object-fit: contain;
    height: 500px;
  }
}
</style>
