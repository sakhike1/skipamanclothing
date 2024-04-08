<template>
  <section>
    <!-- Container -->
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
    >
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
            @submit.prevent="submitForm"
            class="mx-auto mb-4 max-w-[400px] text-left"
            name="wf-form-password"
            method="get"
          >
            <div>
              <label for="name-2" class="mb-1 font-medium">Your Name</label>
              <input
                id="nameInput"
                type="text"
                v-model="name"
                class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
              />
            </div>
            <div class="mb-2">
              <label for="name-2" class="mb-1 font-medium">Email Address</label>
              <input
                id="emailInput"
                type="text"
                v-model="email"
                class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-4 text-sm text-[#333333]"
              />
            </div>
            <div class="mb-5 md:mb-6 lg:mb-8">
              <label for="field-3" class="mb-1 font-medium">Design request </label>
              <textarea
                id="messageInput"
                v-model="message"
                placeholder=""
                maxlength="5000"
                name="field"
                class="mb-2.5 block h-auto min-h-[128px] w-full rounded-md border border-solid border-black p-3 text-sm text-[#333333]"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send request"
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
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Checking if name, email, and message are not empty
      if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
        alert("Please fill in all fields.");
        return;
      }

      // Checking email format
      if (!emailRegex.test(this.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // All validations passed, you can proceed with sending the message
      alert("Message sent successfully!");
      // Reset form fields
      this.name = "";
      this.email = "";
      this.message = "";
      // Refresh the page
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
