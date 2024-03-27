<template>
  <div>
    <section class="relative h-screen bg-[#cccccc] md:h-screen">
      <!-- Container -->
      <div
        class="absolute left-1/2 top-1/2 w-[90%] max-w-[900px] -translate-x-1/2 -translate-y-1/2 bg-white md:h-96 lg:w-full"
      >
        <!-- Content -->
        <div class="grid h-full md:grid-cols-[0.5fr_1fr]">
          <!-- Image -->
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg"
            alt=""
            class="inline-block h-full max-h-60 w-full object-cover md:max-h-full"
          />
          <div class="flex flex-col justify-center px-6 py-12 sm:pl-12 sm:pr-20 md:py-16">
            <!-- Title -->
            <h3 class="mb-2 text-2xl font-bold md:text-3xl">Newsletter Signup</h3>
            <p class="mb-6 text-sm text-[#636262] sm:text-base lg:mb-8">
              Egestas consectetur a cras aliquam tincidunt tellus quam. Quis faucibus
              tincidunt etiam sed
            </p>
            <!-- Form -->
            <form name="email-form" method="get" class="relative mb-4 max-w-full">
              <input
                type="email"
                class="block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                placeholder="Enter your email"
                required=""
              />
              <input
                type="submit"
                value="Subscribe"
                class="relative top-[5px] w-full cursor-pointer rounded-md bg-black px-6 py-2 font-semibold text-white sm:absolute sm:right-1 sm:w-36"
              />
            </form>
            <p class="text-sm text-[#636262]">Zero spam. Only quality pixels.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
