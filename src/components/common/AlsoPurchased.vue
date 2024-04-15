<template>
  <div class="container pt-20 lg:mx-20 xl:mx-auto relative">
    <div
      class="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4"
    >
      <router-link to="/AllTshirt">
        <button
          @click="changeButtonText"
          :style="{ backgroundImage: buttonBackgroundGradient }"
          class="moving-button w-full shadow-xl hover:scale-105 lg:py-4 rounded-full px-4 lg:px-4 font-bold text-gray-600 text-md lg:text-md xl:text-md hover:opacity-90"
        >
          {{ buttonText }}
        </button>
      </router-link>
    </div>

    <div class="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
      <div class="slider">
        <div class="slide-ana">
          <div ref="slider" class="keen-slider">
            <div class="keen-slider__slide number-slide1">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
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
                class="object-contain h-full w-full bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400"
                :src="require('@/assets/HotNow.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide4">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                :src="require('@/assets/HotNow4.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide5">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                :src="require('@/assets/HotNow2.png')"
              />
            </div>
            <div class="keen-slider__slide number-slide6">
              <img
                class="object-contain h-full w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
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
    setInterval(this.changeButtonText, 5000);
    setInterval(this.changeButtonGradient, 5000);
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
  methods: {
    navigateToNewItems() {
      // Navigate to the route for new items
      this.$router.push({ name: "NewItems" });
    },
    changeButtonText() {
      const randomIndex = Math.floor(Math.random() * this.randomTexts.length);
      this.buttonText = this.randomTexts[randomIndex];
    },
    changeButtonGradient() {
      const randomIndex = Math.floor(Math.random() * this.randomGradients.length);
      this.buttonBackgroundGradient = this.randomGradients[randomIndex];
    },
  },
  data() {
    return {
      buttonText: "New steeze just arrived! Check them out",
      randomTexts: [
        "Fresh items just landed!",
        "Check out the latest arrivals!",
        "New styles available now!",
        "Discover trendy new arrivals!",
        "Exciting new collection now in stock!",
        "Explore our new arrivals!",
      ],
      randomGradients: [
        "linear-gradient(to right, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182))",
        "linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))",
        "linear-gradient(to right, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182))",
        "linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))",
        "linear-gradient(to right, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182))",
        "linear-gradient(to right, rgb(134, 239, 172), rgb(192, 132, 252))",
      ],
      buttonBackgroundGradient:
        "linear-gradient(to right, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182))", // Initial background color
    };
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

.moving-button {
  position: relative;
  animation: moveRight 15s infinite;
  transform: translateZ(0);
}

@keyframes moveRight {
  0%,
  100% {
    left: 0;
  }
  50% {
    left: calc(50%); /* Adjust the width of the button */
  }
}

.moving-button:hover {
  animation-play-state: paused; /* Pause animation on hover */
}
</style>

<style lang="scss" scoped></style>
