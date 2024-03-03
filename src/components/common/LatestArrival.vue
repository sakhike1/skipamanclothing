<template>
    <div>
        <div ref="slider" class="keen-slider h-[670px]">
            <div class="keen-slider__slide number-slide1">
                <img class="object-cover h-full w-full" :src="require('@/assets/men.jpg')" />
            </div>
            <div class="keen-slider__slide number-slide2">
                <img class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                    :src="require('@/assets/image50.png')" />
            </div>
            <div class="keen-slider__slide number-slide3">
                <img class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                    :src="require('@/assets/image24.png')" />
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
import TshirtsCard from "@/components/common/TshirtsCard.vue"
import LastSlider from "@/components/common/LastSlider.vue"
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

export default {
    components: {

        TshirtsCard,
        LastSlider

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
/* Your styles here */
</style>