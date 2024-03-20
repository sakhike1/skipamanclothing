<template>
  <div ref="slider" class="keen-slider" style="height: 500px">
    <div id="keen-slider__slide1" class="keen-slider__slide number-slide1">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza18.png')" />
    </div>
    <div id="keen-slider__slide2" class="keen-slider__slide number-slide2">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza2.png')" />
    </div>
    <div id="keen-slider__slide3" class="keen-slider__slide number-slide3">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza15.png')" />
    </div>
    <div id="keen-slider__slide4" class="keen-slider__slide number-slide4">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza10.png')" />
    </div>
    <div id="keen-slider__slide5" class="keen-slider__slide number-slide5">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza18.png')" />
    </div>
    <div id="keen-slider__slide6" class="keen-slider__slide number-slide6">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza15.png')" />
    </div>
  </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default {
  components: {},
  name: "TheSlider",
  mounted() {
    this.slider = new KeenSlider(
      this.$refs.slider,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
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

.number-slide1 {
  background-image: linear-gradient(
    to right,
    rgb(153, 27, 27),
    rgb(202, 138, 4),
    rgb(234, 179, 8)
  );
}

.number-slide2 {
  background-color: linear-gradient(to right, rgb(251, 146, 60), rgb(251, 113, 133));
}

.number-slide3 {
  background-image: linear-gradient(to right, rgb(253, 186, 116), rgb(253, 164, 175));
}

.number-slide4 {
  background-image: radial-gradient(
    at center top,
    rgb(180, 83, 9),
    rgb(253, 186, 116),
    rgb(159, 18, 57)
  );
}

.number-slide5 {
  background-image: radial-gradient(rgb(88, 28, 135), rgb(99, 102, 241));
}

.number-slide6 {
  background-image: linear-gradient(rgb(249, 115, 22), rgb(253, 224, 71));
}

@media screen and (min-width: 381px) and (max-width: 700px) {
  #keen-slider__slide1,
  #keen-slider__slide2 #keen-slider__slide5,
  img {
    height: 500px; /* Adjust height as needed */
    object-fit: contain;
  }
}

@media screen and (min-width: 381px) and (max-width: 700px) {
  #keen-slider__slide6 img {
    height: 500px; /* Adjust height as needed */
    object-fit: cover;
  }
}

@media screen and (min-width: 381px) and (max-width: 700px) {
  #keen-slider__slide3 img {
    height: 500px; /* Adjust height as needed */
    object-fit: cover;
  }
}

@media screen and (min-width: 381px) and (max-width: 700px) {
  #keen-slider__slide4 img {
    height: 500px; /* Adjust height as needed */
    object-fit: cover;
  }
}
</style>
