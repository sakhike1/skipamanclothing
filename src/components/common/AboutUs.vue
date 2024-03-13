<template>
    <div class="bg-gradient-to-r from-gray-100 to-gray-50">

        <section>
            <!-- Container -->
            <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
              <!-- Title -->

              <div class="grid gap-10  lg:grid-cols-2 lg:gap-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                <img rel="preload" class="w-[500px] hover:scale-90 rounded-lg h-[500px] m-20 object-contain max-w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 max-h-full "
                :src="currentImage" />
                <div class="flex flex-col hover:scale-90 transform-gpu bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-500 via-orange-200 to-yellow-600 gap-5 rounded-lg  shadow-2xl   p-10 sm:p-20">
                  <h2 class="text-3xl font-bold md:text-5xl">Our Mission</h2>
                  <p class="text-xs text-[#000000] sm:text-base"> Our mission at Skipaman is to provide top-quality t-shirts, hoodies, and caps tailored to your preferences. We're dedicated to fulfilling all your requests, ensuring you achieve the perfect look. At Skipaman, we prioritize quality above all else. Whether you're in search of t-shirts or hoodies, Skipaman offers precisely what you need – exceptional quality that you can rely on
                    <br />
                    <br />Speak to us if you looking for quality that you can trust value for money is very vital to us 
                  </p>
                </div>
              </div>
            </div>
          </section>
    </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

export default {
    components: {

    },




    computed: {
         aboutImage() {
            return this.$store.state.aboutImage;
        },
    },
    data() {
        return {
            currentImageIndex: 0,
            autoPlayTimer: null,
            currentImage: '',
            color: 'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
        };
    },
    methods: {
        startAutoPlay() {
            // Set the initial image source before starting auto-play
            this.currentImage = this.aboutImage[this.currentImageIndex];

            const interval = 3000; // 3 seconds
            this.autoPlayTimer = setInterval(this.changeImage, interval);
        },
        changeImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.aboutImage.length;
            this.currentImage = this.aboutImage[this.currentImageIndex];
        },

        randomColor() {
            const gradients = [
                'linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(134, 239, 172))',
                'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
                'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
                'linear-gradient(to right, rgb(123, 104, 238), rgb(255, 69, 0))', // Add more gradients as needed
                'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))',
                'linear-gradient(to right, rgb(101, 163, 13), rgb(253, 224, 71), rgb(220, 38, 38))',
                'linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241))'

            ];
            this.color = gradients[Math.floor(Math.random() * gradients.length)];
        },
    },
    mounted() {
        this.startAutoPlay();
        setInterval(this.randomColor, 3000);
    },
    beforeDestroy() {
        clearInterval(this.autoPlayTimer);
    },
};
</script>

<style lang="scss" scoped>

</style>