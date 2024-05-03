<template>
    <div class="mx-auto" style=" background: rgb(202, 199, 200);
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);">


        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
            class="overflow-hidden     md:p-8 ">
            <div class="flex flex-col   w-[85%] md:flex-row mx-auto">
                <div :style="{ background: color }"
                    class="p-4 sm:p-8 lg:p-16 md:w-56 lg:w-48 flex-grow order-last md:order-first">
                    <div id="skipaman" class="text-left md:w pt-7 sm:text-left rtl:sm:text-right">
                        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
                            Latest skipas
                        </h2>
                        <p class="text-xs max-w-lg text-black mt-4 md:mt-6 md:block md:leading-relaxed">
                            High-quality t-shirts made from durable fabrics will ensure that your favorite tees remain
                            comfortable and stylish for a long time, providing excellent value for your money.
                        </p>
                        <div class="mt-4  sm:mt-8">
                            <router-link to="/AllTshirt" @click="randomColor"
                                class="inline-block md:w-56 text-center rounded-full bg-green border hover:bg-opacity-0  hover:bg-gray-50 border-gray-900 text-white   px-4 sm:px-12 py-3 text-sm font-medium hover:text-black bg-black transition  ">
                                Get your cool now!
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="from-gray-900 to-gray-600 bg-gradient-to-r
                     flex items-center justify-center   md:w-[400px]">
                    <img rel="preload" class="w-[350px] h-[350px] object-cover max-w-full max-h-full "
                        :src="currentImage" />
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
        imageSources() {
            return this.$store.state.imageSources;
        },
    },
    data() {
        return {
            currentImageIndex: 0,
            autoPlayTimer: null,
            currentImage: '',
            color: 'linear-gradient(to right, rgb(156, 163, 175), rgb(75, 85, 99), rgb(30, 64, 175))',
        };
    },
    methods: {
        startAutoPlay() {
            // Set the initial image source before starting auto-play
            this.currentImage = this.imageSources[this.currentImageIndex];

            const interval = 3000; // 3 seconds
            this.autoPlayTimer = setInterval(this.changeImage, interval);
        },
        changeImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
            this.currentImage = this.imageSources[this.currentImageIndex];
        },

        randomColor() {
            const gradients = [

                'linear-gradient(to right, rgb(100, 116, 139), rgb(254, 249, 195))',
                'conic-gradient(at left bottom, rgb(240, 171, 252), rgb(74, 222, 128), rgb(190, 18, 60))',
                'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900',


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

<style scoped>
.inline-block:hover {
    opacity: 1;
}

.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}


.overflow-hidden {
    background: rgb(202, 199, 200);
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);

}



@media screen and (min-width: 640px) {
    .text-center {
        /* Apply some styles */
    }
}

.inline-block:hover {
    opacity: 1;
}

.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}

.mx-auto {
    background: linear-gradient(90deg,
            rgba(254, 250, 252, 1) 0%,
            rgba(242, 248, 255, 1) 100%);
}

@media screen and (min-width: 640px) {
    #skipaman {
        text-align: center;
        background-color: rgb(255, 0, 43);
    }
}
