<template>
  <div>
    <div ref="slider" class="keen-slider h-[670px]">
      <div class="keen-slider__slide number-slide1">
        <img
          id="#image1"
          class="object-cover h-full w-full"
          :src="require('@/assets/men.jpg')"
        />
      </div>
      <div id="keen-slider__slide" class="keen-slider__slide number-slide2">
        <img
          id="#image11"
          class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
          :src="require('@/assets/image50.png')"
        />
      </div>
      <div id="keen-slider__slide3" class="keen-slider__slide number-slide3">
        <img
          id="#image13"
          class="object-contain h-full w-full sm:w-full md:w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
          :src="require('@/assets/image24.png')"
        />
      </div>
    </div>

    <!-- Place the components inside a single parent div -->
    <div>
      <TshirtsCard />
      <LastSlider />
    </div>
  </div>
</template>

<script>
import TshirtsCard from "@/components/common/TshirtsCard.vue";
import LastSlider from "@/components/common/LastSlider.vue";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

export default {
  components: {
    TshirtsCard,
    LastSlider,
  },
  name: "TheSlider",
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      loop: true,
    });
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style>
@media (min-width: 380px) and (max-width: 911px) {
  .keen-slider__slide img {
    height: 700px;
    object-fit: cover;
  }
}

@media (min-width: 380px) and (max-width: 911px) {
  #keen-slider__slide3 img {
    height: 706px;
  }
}

@media (min-width: 280px) and (max-width: 480px) {
  #keen-slider__slide img {
    height: 700px;
  }
}

@media (min-width: 481px) and (max-width: 900px) {
  #keen-slider__slide img {
    height: 671px;
    object-fit: contain;
  }
}

@media (min-width: 481px) and (max-width: 900px) {
  #keen-slider__slide3 img {
    height: 671px;
    object-fit: contain;
  }
}
</style>
