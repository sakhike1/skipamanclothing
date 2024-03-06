<template>
    <div ref="slider" class="keen-slider h-[670px]" style="height: 500px">
        <div class="keen-slider__slide number-slide1"><img
                class="object-contain h-full w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
                :src="require('@/assets/zaza18.png')" /></div>
        <div class="keen-slider__slide number-slide2"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/zaza2.png')" /></div>
        <div class="keen-slider__slide number-slide3"><img
                class="object-contain h-full w-full bg-gradient-to-t from-orange-400 to-sky-400"
                :src="require('@/assets/zaza15.png')" /></div>
        <div class="keen-slider__slide number-slide4"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/zaza10.png')" /></div>
        <div class="keen-slider__slide number-slide5"><img
                class="object-contain h-full w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300"
                :src="require('@/assets/zaza18.png')" /></div>
        <div class="keen-slider__slide number-slide6"><img
                class="object-contain h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
                :src="require('@/assets/zaza15.png')" /></div>
    </div>
</template>

<script>
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

export default {
    components: {



    },
    name: "TheSlider",
    mounted() {
        this.slider = new KeenSlider(
            this.$refs.slider,
            {
                loop: true,
            },
            [
                (slider) => {
                    let timeout
                    let mouseOver = false
                    function clearNextTimeout() {
                        clearTimeout(timeout)
                    }
                    function nextTimeout() {
                        clearTimeout(timeout)
                        if (mouseOver) return
                        timeout = setTimeout(() => {
                            slider.next()
                        }, 2000)
                    }
                    slider.on("created", () => {
                        slider.container.addEventListener("mouseover", () => {
                            mouseOver = true
                            clearNextTimeout()
                        })
                        slider.container.addEventListener("mouseout", () => {
                            mouseOver = false
                            nextTimeout()
                        })
                        nextTimeout()
                    })
                    slider.on("dragStarted", clearNextTimeout)
                    slider.on("animationEnded", nextTimeout)
                    slider.on("updated", nextTimeout)
                },
            ]
        )
    },
    beforeDestroy() {
        if (this.slider) this.slider.destroy()
    },
}
</script>



<style>
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 700px;
    max-height: 200vh;
}

.number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%);
}

.number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(128deg,
            rgba(255, 154, 63, 1) 0%,
            rgba(255, 75, 64, 1) 100%);
}

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
</style>