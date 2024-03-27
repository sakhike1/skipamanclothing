<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div
        class="grid items-center linear-gradient(to right, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99)) gap-8 sm:gap-20 lg:grid-cols-2"
      >
        <div class="max-w-3xl">
          <!-- Title -->
          <h2 class="mb-2 text-3xl font-bold md:text-5xl">
            Get the coolest looks for your shoes
          </h2>
          <p
            class="my-4 max-w-lg pb-4 text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8"
          >
            Send us your logo or design that you want on your sweater or hoodie. We offer
            a variety of colors, including options for T-shirts, sweaters, and hoodies.
          </p>
          <!-- Testimonial -->
        </div>
        <div class="mx-auto max-w-xl bg-[#f2f2f7] p-8 shadow-2xl text-center">
          <h3 class="text-2xl font-bold md:text-3xl">Send your request</h3>
          <p class="mx-auto mb-6 text-left mt-4 max-w-lg text-sm text-[#636262] lg:mb-8">
            We offer a variety of colors, including options for T-shirts, sweaters, and
            hoodies.
          </p>
          <!-- Form -->
          <form
            class="mx-auto mb-4 max-w-[400px] text-left"
            name="wf-form-password"
            method="get"
          >
            <div>
              <label for="name-2" class="mb-1 font-medium">Your Name</label>
              <input
                type="text"
                class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
              />
            </div>
            <div class="mb-2">
              <label for="name-2" class="mb-1 font-medium">Email Address</label>
              <input
                type="text"
                class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
              />
            </div>
            <div class="mb-5 md:mb-6 lg:mb-8">
              <label for="field-3" class="mb-1 font-medium">Design request </label>
              <textarea
                placeholder=""
                maxlength="5000"
                name="field"
                class="mb-2.5 block h-auto min-h-[128px] w-full rounded-md border border-solid border-black p-3 text-sm text-[#333333]"
              >
              </textarea>
            </div>
            <input
              type="submit"
              value="Send request "
              class="inline-block w-full cursor-pointer rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    function changeTextColor() {
      const textElement = document.getElementById("colorChangingText");
      const textElements = document.getElementById("colorChangingTexts");
      if (textElement && textElements) {
        const colors = ["#FFBF00", " #000000", "#FFBF00"]; // Yellow, Orange, White
        const colorss = ["#000000", "#FFBF00", "#000000"]; // Orange, Lime Green, White
        let colorIndex = 0;

        setInterval(() => {
          textElement.style.color = colors[colorIndex];
          textElements.style.color = colorss[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length;
        }, 1000); // Change color every second
      }
    }

    changeTextColor();
  },
};
</script>

<style lang="scss" scoped></style>
