<template>
    <section  class="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
        <!-- Contact Container -->
        <div class="mx-auto w-full max-w-7xl px-5 py-2 md:px-10 md:py-24 lg:py-32">
          <!-- Component -->
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <!-- Contact Text -->
            <div class="flex max-w-2xl flex-col items-start mb-80">
              <h2 class="mb-6 text-3xl font-bold md:text-5xl">Get your desired look</h2>
              <p id="colorChangingTexts" class="mb-6 text-sm max-w-lg pb-4 text-[#dfd4d4]">Send us your logo or design that you <span id="colorChangingText">want on your sweater or hoodie We offer a variety of colors, including options </span>  for T-shirts, sweaters, and hoodies </p>
           
              
            </div>
            <!-- Contact Form Container -->
            <div class="mx-auto max-w-xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 p-8 text-center">
              <!-- Contact Form Title -->
              <h3 class="text-2xl font-bold md:text-3xl">Send us your design request</h3>
              <p class="mx-auto mb-2 p-5 mt-4 max-w-md text-left text-sm text-[#4b4848]">We are very excited you considering working with us we work very fast and we are reliable to our clients </p>
              <!-- Contact Form -->
              <form class="mx-auto mb-4 max-w-sm text-left" name="wf-form-password" method="get">
                <div class="mb-4 flex flex-col gap-y-2">
                  <label for="name-2" class="mb-1 font-medium">Your Name</label>
                  <input type="text" class="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]" placeholder="" required="" />
                </div>
                <div class="mb-4 flex flex-col gap-y-2">
                  <label for="name-2" class="mb-1 font-medium">Email Address</label>
                  <input type="text" class="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]" placeholder="" required="" />
                </div>
                <div>
                    <h1>Upload file you want on your item</h1>
                <label for="uploadFile1"
      class="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 mx-auto font-[sans-serif] m-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 mb-6 fill-gray-400" viewBox="0 0 24 24">
        <path
          d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
          data-original="#000000" />
        <path
          d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
          data-original="#000000" />
      </svg>
      <p class="text-gray-400 font-semibold text-sm">Drag & Drop or <span class="text-[#007bff]">Choose file</span> to
        upload</p>
      <input type="file" id='uploadFile1' class="hidden" onchange="handleFileUpload(event)" />
      <p class="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    </label>
</div>
                
                <div class="mb-8 flex flex-col gap-y-2">
                  <label for="field-3" class="mb- font-medium">Send brief request</label>
                  <textarea placeholder="" class="h-auto min-h-[186px] w-full overflow-auto bg-white px-3 py-2 text-sm text-[#333333]"> </textarea>
                </div>
                <input type="submit" value="Send request" class="inline-block w-full cursor-pointer bg-gradient-to-b from-gray-900 to-gray-600 px-6 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]" />
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
            const textElement = document.getElementById('colorChangingText');
            const textElements = document.getElementById('colorChangingTexts');
            if (textElement && textElements) {
                const colors = ['#0B3241', ' #EEEEEE', '#0B3241']; // Yellow, Orange, White
                const colorss = ['#EEEEEE', '#0B3241', '#EEEEEE']; // Orange, Lime Green, White
                let colorIndex = 0;

                setInterval(() => {
                    textElement.style.color = colors[colorIndex];
                    textElements.style.color = colorss[colorIndex];
                    colorIndex = (colorIndex + 1) % colors.length;
                }, 1000); // Change color every second
            }
        }

        changeTextColor();
    }
    
}


</script>

<style lang="scss" scoped>

</style>