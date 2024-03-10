<template>
    <div>
        <div ref="slider" class="keen-slider h-[500px]">
            <div class="keen-slider__slide number-slide1">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales1.png')" />
            </div>
            <div class="keen-slider__slide number-slide2">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales2.png')" />
            </div>
            <div class="keen-slider__slide number-slide3"><img
                    class="object-contain md:h- md:w-full h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales3.png')" /></div>
            <div class="keen-slider__slide number-slide4"><img
                    class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales4.png')" /></div>
            <div class="keen-slider__slide number-slide5"><img
                    class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales5.png')" /></div>
            <div class="keen-slider__slide number-slide6"><img
                    class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales6.png')" /></div>
        </div>
        <div ref="thumbnail" class="keen-slider thumbnail ">
            <div class="keen-slider__slide number-slide1">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales1.png')" />
            </div>
            <div class="keen-slider__slide number-slide2">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales2.png')" />
            </div>
            <div class="keen-slider__slide number-slide3">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales3.png')" />
            </div>
            <div class="keen-slider__slide number-slide4">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales4.png')" />
            </div>
            <div class="keen-slider__slide number-slide5">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales5.png')" />
            </div>
            <div class="keen-slider__slide number-slide6">
                <img class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                    :src="require('@/assets/sales6.png')" />
            </div>
        </div>
    </div>
</template>

<script>
import "keen-slider/keen-slider.min.css"
import KeenSlider from "keen-slider"

function ThumbnailPlugin(main) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    main.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            addActive(slider.track.details.rel)
            addClickEvents()
            main.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}

export default {
    name: "theSlider",
    mounted() {
        this.slider = new KeenSlider(this.$refs.slider)
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
        )
    },
    beforeDestroy() {
        if (this.slider) this.slider.destroy()
        if (this.thumbnail) this.thumbnail.destroy()
    },
}
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

.thumbnail .keen-slider__slide {
    font-size: 30px;
    margin-top: 10px;
    height: 400px;
}

.thumbnail .keen-slider__slide {
    cursor: pointer;
}

@media (max-width: 640px) {
    .thumbnail {
        height: 305px;
        /* Adjust height as needed */
    }
    

    .keen-slider__slide img {
        max-width: 100%;
        max-height: 100%;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .thumbnail {
        height: 305px; /* Adjust height as needed */
    }
}


@media (min-width: 1025px) and (max-width: 1180px) {
    .thumbnail {
        height: 305px; /* Adjust height as needed */
    }
}

@media (min-width: 433px) and (max-width: 620px) {
    .thumbnail {
        height: 305px; /* Adjust height as needed */
    }
}

@media (min-width: 380px) and (max-width: 610px) {
    .thumbnail {
        height: 305px; /* Adjust height as needed */
    }
}
@media (min-width: 400px) and (max-width: 606px) {
    .thumbnail {
        height: 270px; /* Adjust height as needed */
    }
}

@media (min-width: 380px) and (max-width: 606px) {
    .thumbnail {
        height: 250px; /* Adjust height as needed */
    }
}
@media (min-width: 1182px)  {
    .thumbnail {
        height: 330px; /* Adjust height as needed */
    }
}
</style>