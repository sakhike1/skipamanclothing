<template>
  <div>
    <div ref="slider" class="keen-slider h-[500px]">
      <div id="keen-slider__slide1" class="keen-slider__slide number-slide1">
        <img class="object-contain h-full w-full" :src="require('@/assets/sales1.png')" />
      </div>
      <div id="keen-slider__slide2" class="keen-slider__slide number-slide2">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales2.png')" />
      </div>
      <div id="keen-slider__slide3" class="keen-slider__slide number-slide3">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales3.png')" />
      </div>
      <div id="keen-slider__slide4" class="keen-slider__slide number-slide4">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales4.png')" />
      </div>
      <div id="keen-slider__slide5" class="keen-slider__slide number-slide5">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales5.png')" />
      </div>
      <div id="keen-slider__slide6" class="keen-slider__slide number-slide6">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales6.png')" />
      </div>
    </div>
    <div ref="thumbnail" class="keen-slider thumbnail">
      <div id="keen-slider__slide7" class="keen-slider__slide number-slide1">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales1.png')" />
      </div>
      <div id="keen-slider__slide8" class="keen-slider__slide number-slide2">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales2.png')" />
      </div>
      <div id="keen-slider__slide9" class="keen-slider__slide number-slide3">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales3.png')" />
      </div>
      <div id="keen-slider__slide10" class="keen-slider__slide number-slide4">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales4.png')" />
      </div>
      <div id="keen-slider__slide11" class="keen-slider__slide number-slide5">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales5.png')" />
      </div>
      <div id="keen-slider__slide12" class="keen-slider__slide number-slide6">
        <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
          :src="require('@/assets/sales6.png')" />
      </div>
    </div>
  </div>
</template>

<script>
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

function ThumbnailPlugin(main) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          main.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      addActive(slider.track.details.rel);
      addClickEvents();
      main.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default {
  name: "theSlider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider);
    this.thumbnail = new KeenSlider(
      this.$refs.thumbnail,
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(this.slider)]
    );
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
    if (this.thumbnail) this.thumbnail.destroy();
  },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 200px;
  max-height: 100vh;
}

.number-slide1 {
  background-image: linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116));
}

.number-slide2 {}

.number-slide3 {
  background: rgb(182, 255, 64);
  background: linear-gradient(128deg,
      rgba(182, 255, 64, 1) 0%,
      rgba(63, 255, 71, 1) 100%);
  background: linear-gradient(128deg,
      rgba(189, 255, 83, 1) 0%,
      rgba(43, 250, 82, 1) 100%);
}

.number-slide4 {
  background: rgb(64, 255, 242);
  background: linear-gradient(128deg,
      rgba(64, 255, 242, 1) 0%,
      rgba(63, 188, 255, 1) 100%);
}

.number-slide5 {
  background: rgb(255, 64, 156);
  background: linear-gradient(128deg,
      rgba(255, 64, 156, 1) 0%,
      rgba(255, 63, 63, 1) 100%);
}

.number-slide6 {
  background: rgb(64, 76, 255);
  background: linear-gradient(128deg,
      rgba(64, 76, 255, 1) 0%,
      rgba(174, 63, 255, 1) 100%);
}

.thumbnail .keen-slider__slide {
  font-size: 30px;
  margin-top: 10px;
  height: 400px;
}

.thumbnail .keen-slider__slide {
  cursor: pointer;
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide1,
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

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide5 img {
    object-fit: contain;
    height: 500px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide6 img {
    object-fit: contain;
    height: 500px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide7 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide8 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide9 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide10 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide11 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 911px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide12 img {
    object-fit: fill;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide7 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide8 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide9 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide10 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide11 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 912px) and (max-width: 1253px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide12 img {
    object-fit: cover;
    height: 400px;
  }
}

@media only screen and (min-width: 280px) and (max-width: 851px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide7,
  #keen-slider__slide8,
  #keen-slider__slide9,
  #keen-slider__slide10,
  #keen-slider__slide11,
  #keen-slider__slide12 {
    display: none;
  }
}

@media only screen and (min-width: 280px) and (max-width: 380px) {

  /* Styles for screens between 600px and 1200px wide */
  #keen-slider__slide1,
  #keen-slider__slide2,
  #keen-slider__slide3,
  #keen-slider__slide4,
  #keen-slider__slide5,
  #keen-slider__slide6 {
    height: 700px;
    object-fit: cover;
  }
}
</style>
