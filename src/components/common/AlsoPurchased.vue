<template>
  <div class="container lg:mx-20 xl:mx-auto relative">
    <div
      class="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4"
    >
      <h1
        class="mt-5 lg:mt-12 py-3 lg:py-4 px-4 lg:px-6 font-bold text-black rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90"
      >
        Recommended
      </h1>
    </div>

    <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div class="slider">
        <div class="slide-ana">
          <div ref="slider" class="keen-slider">
            <div class="keen-slider__slide number-slide1">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide2">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow2.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide3">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide4">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow4.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide5">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow2.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide6">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-green-300 to-purple-400"
                :src="require('@/assets/HotNow4.png')"
              />
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap");
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
.slider {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.slide-ana {
  height: 368px;
}

.slide-ana > div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}

@media (min-width: 300px) and (max-width: 884px) {
  .slider {
    height: 400px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .slider {
    height: 330px;
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .slider {
    height: 300px;
  }
}

.slider2 {
  width: 100%;
  height: 386px;
  position: relative;
  overflow: hidden;
}

.slide-ana2 {
  height: 100%;
}

.slide-ana2 > div {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s;
}

@media (min-width: 300px) and (max-width: 1023px) {
  .slider2 {
    height: 486px;
  }
}

.carousel__sliderLarge {
  padding-left: 20%;
  padding-right: 20%;
}
</style>

<style lang="scss" scoped></style>
