<template>
  <section>
    <div :style="{ background: backgroundGradient }">
      <!-- Title Container -->
      <div class="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <!-- Title Component -->
        <div class="flex flex-col items-stretch self-center text-center">
          <h1 class="mb-5 text-4xl text-gray-50 font-bold md:text-6xl">
            Terms of Service
          </h1>
          <p class="mb-10 flex-col text-xs text-[#070707]">
            Read our terms below to learn more about your rights and responsibilities
          </p>
        </div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-5xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
      <!-- Terms Component -->
      <div class="flex min-w-full flex-col items-start gap-y-5">
        <!-- Term -->
        <h4 class="mb-5 text-gray-400 text-xl font-extrabold sm:text-xl md:text-2xl">
          Terms and legal conditions
        </h4>
        <p class="mb-2 text-sm">
          This Terms of Service ("Agreement") governs the use of design services provided
          by Skipaman ("Company") to clients ("Client" or "Clients"). By accessing or
          using any services provided by the Company, Clients agree to be bound by these
          Terms of Service.
        </p>
        <!-- Term -->
        <h4 class="text-xl text-gray-400 font-extrabold sm:text-xl md:text-2xl">
          Services
        </h4>
        <p class="mb-2 text-sm">
          We provide top-quality t-shirts, hoodies, and caps tailored to your preferences.
          We're dedicated to fulfilling all your requests, ensuring you achieve the
          perfect look. At Skipaman, we prioritize quality above all else. Whether you're
          in search of t-shirts or hoodies, Skipaman offers precisely what you need –
          exceptional quality that you can rely on
          <br />
        </p>
        <!-- Term -->
        <h4 class="text-xl text-gray-400 font-extrabold sm:text-xl md:text-2xl">
          Client Responsibilities
        </h4>
        <p class="mb-2 text-sm">
          The client acknowledges and agrees that once items have been purchased, they
          shall not be eligible for return after use. It is the responsibility of the
          client to thoroughly inspect items upon delivery and notify the seller
          immediately of any issues or discrepancies. The client understands that items
          will only be delivered upon receipt of full payment. No items will be dispatched
          or made available for collection until payment has been successfully processed
          and verified by the seller The client agrees to complete the purchase of items
          within a week of initiating the transaction. Failure to do so may result in
          cancellation of the order or additional charges at the discretion of the seller
        </p>
        <!-- Term -->

        <h4 class="text-xl text-gray-400 font-extrabold sm:text-xl md:text-2xl">
          Payment
        </h4>
        <p class="mb-2 text-sm">
          The client understands that items will only be delivered upon receipt of full
          payment. No items will be dispatched or made available for collection until
          payment has been successfully processed and verified by the seller
        </p>

        <!-- Term -->
        <div class="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
        <p class="mb-2 text-sm">
          By accessing, browsing, or utilizing any design services, communication
          channels, or materials provided by Flowspark, including but not limited to
          graphic design, web design, branding, illustration, and user interface design,
          whether through our website, email, phone, or any other means, you expressly
          acknowledge, understand, and agree that you have carefully read, comprehended,
          and fully consent to be legally bound by all the provisions, terms, and
          conditions set forth in these Terms of Service, including any additional
          agreements, policies, guidelines, or amendments referenced or incorporated
          herein.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      backgroundGradient: "", // Initial background gradient
    };
  },
  created() {
    this.changeBackgroundColor();
  },
  methods: {
    changeBackgroundColor() {
      // Set background gradient
      const gradients = [
        "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
        "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
        "linear-gradient(to right, rgb(255, 206, 119), rgb(253, 121, 168), rgb(151, 120, 176))",
      ];

      // Get a random index to select a gradient from the array
      const randomIndex = Math.floor(Math.random() * gradients.length);

      // Set background gradient
      this.backgroundGradient = gradients[randomIndex];

      // Call this function recursively to change background gradient periodically
      setTimeout(this.changeBackgroundColor, 3000); // Change gradient every 3 seconds
    },
  },
};
</script>
