<template>
  <div class="container lg:mx-20 xl:mx-auto relative">
    <div
      class="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4"
    >
      <h1
        class="mt-5 lg:mt-12 py-3 lg:py-4 px-4 lg:px-6 bg-white font-bold text-black rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90"
      >
        Recommended
      </h1>
    </div>
    <div class="flex items-center justify-between absolute inset-0 w-full h-full">
      <button
        @click="showPrev"
        role="button"
        aria-label="slide forward"
        class="z-30 ml-6 lg:ml-10 focus:outline-none bg-white rounded-full p-2 focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="next"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="black"
            stroke-width="1px"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        @click="showNext"
        role="button"
        aria-label="slide forward"
        class="z-30 bg-white rounded-full p-2 mr-5 lg:mr-16 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="next"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="black"
            stroke-width="{2}"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div class="slider">
        <div class="slide-ana">
          <VueSlickCarousel v-bind="settings" ref="carousel">
            <div class="relative flex justify-center items-center">
              <div class="gallery-cell w-full h-full">
                <div class="relative w-full h-full lg:block">
                  <img
                    class="object-cover h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                    :src="require('@/assets/image60.png')"
                  />
                  <div class="pl-6 pb-20 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                    <h1
                      class="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white"
                    >
                      Lounge Interior
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-3">
              <div class="flex flex-shrink-0 relative w-full sm:w-auto">
                <div class="gallery-cell w-full h-full">
                  <div class="relative w-full h-full bg-red-100 lg:block">
                    <img
                      class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                      :src="require('@/assets/image60.png')"
                    />
                    <div class="pl-6 pb-20 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                      <h1
                        class="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white"
                      >
                        Lounge Interior
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 relative">
              <div class="gallery-cell w-full h-full">
                <div class="w-full relative h-full lg:block">
                  <img
                    class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                    :src="require('@/assets/image60.png')"
                  />
                  <div class="pl-6 pb-20 lg:pl-8 lg:pb-8 absolute z-20 left-0 bottom-0">
                    <h1
                      class="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white"
                    >
                      Lounge Interior
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        speed: 500,
      },
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
  mounted() {
    if (this.windowWidth > 1339) {
      this.settings.slidesToShow = 1.65;
    } else if (this.windowWidth > 1079) {
      this.settings.slidesToShow = 1.65;
    } else if (this.windowWidth > 767) {
      this.settings.slidesToShow = 1.65;
    } else {
      this.settings.slidesToShow = 1;
    }
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
