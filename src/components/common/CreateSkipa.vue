<template>


    <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <!-- Container -->
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <!-- Component -->
            <div class="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
                <!-- Heading Div -->
                <div class="max-w-[720px]">
                    <h2 class="mb-4 text-3xl font-semibold md:text-5xl">Send us your design <span
                            class="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">request
                        </span>
                    </h2>
                    <p class="mb-6 max-w-[480px] text-[#636262] md:mb-10 lg:mb-12">you might have a specific design in
                        mind send us your idea so we can implement it </p>
                    <a href="#"
                        class="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white hover:text-orange-700 [box-shadow:rgb(19,_83,_254)_6px_6px]">
                        Get Started
                    </a>
                </div>
                <!-- Image Div -->
                <div id="floating-container"
                    class="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible  md:left-0 md:w-[95%] lg:w-full">
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg"
                        alt=""
                        class="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover" />
                    <div class="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "component",
    data() {
        return {};
    },
};
</script>

<style>
.mx-auto {
    background: none;
}

#floating-container {
    transform: translateY(-10%);
    animation: floater 5s infinite ease-in-out;
    transition: ease 0.9s;

}

@keyframes floater {

    0%,
    100% {
        transform: translateY(-10%);
    }

    50% {
        transform: translateY(10%);
    }
}
</style>
