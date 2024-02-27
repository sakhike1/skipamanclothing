<template>
    <div>
        <!-- Pop-up message -->
        <div v-if="isPopUpVisible" class="fixed z-10 mb-80   inset-0 overflow-y-auto flex justify-center items-center">
            <div class="relative p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 shadow-lg rounded-lg">
                <!-- Close button for the pop-up -->
                <button @click="hidePopUp" class="absolute top-0 right-0 mr-4 mt-2 text-black hover:text-gray-700">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>

                <!-- Pop-up content -->
                <div>
                    <p class="text-xs text-gray-600 mb-2">Hello! There, thank you for looking around</p>
                    <p class="text-xs text-gray-600">get the best t-shirt at low prices we have good things coming up too
                        stay
                        turned </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isPopUpVisible: false
        };
    },
    mounted() {
        // Show the pop-up message automatically when the component is mounted
        this.showPopUp();
    },
    methods: {
        // Function to show the pop-up
        showPopUp() {
            this.isPopUpVisible = true;
            setTimeout(this.hidePopUp, 3000); // Hide the pop-up after 3 seconds
        },
        // Function to hide the pop-up
        hidePopUp() {
            this.isPopUpVisible = false;
        }
    }
};
</script>
  
  <!-- Add Tailwind CSS styles -->
<style>
/* Overlay styles */
</style>
  