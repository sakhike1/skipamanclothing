<template>
  <div
    ref="slider"
    class="keen-slider bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300"
    style="height: 600px"
  >
    <div id="keen-slider__slide1" class="keen-slider__slide number-slide1">
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza18.png')" />
    </div>
    <div
      id="keen-slider__slide2"
      class="keen-slider__slide number-slide2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
    >
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza2.png')" />
    </div>
    <div
      id="keen-slider__slide3"
      class="keen-slider__slide number-slide3 bg-gradient-to-r from-orange-600 to-orange-500"
    >
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza15.png')" />
    </div>
    <div
      id="keen-slider__slide4"
      class="keen-slider__slide number-slide4 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400"
    >
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza10.png')" />
    </div>
    <div
      id="keen-slider__slide5"
      class="keen-slider__slide number-slide5 bg-gradient-to-b from-orange-500 to-yellow-300"
    >
      <img class="object-contain h-full w-full" :src="require('@/assets/zaza18.png')" />
    </div>
    <div
      id="keen-slider__slide6"
      class="keen-slider__slide number-slide6 bg-gradient-to-r from-green-300 to-purple-400"
    >
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
    linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))
  );
}

.number-slide2 {
  background-color: linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252));
}

.number-slide3 {
  background-image: linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252));
}

.number-slide4 {
  background-image: rlinear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252));
}

.number-slide5 {
  background-image: radial-gradient(rgb(88, 28, 135), rgb(99, 102, 241));
}

.number-slide6 {
  background-image: linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252));
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
