<template>
    <nav class="bg-gray-50 p-8 w-full ">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo and E-commerce Link -->
            <div class="flex text-xs items-center">
                <router-link to="/" class="text-white font-bold text-xl pr-4"><img :src="require('@/assets/image.png')"
                        class="h-8 ms-2" alt="" /></router-link>
                <router-link to="/LatestArrivals" class="hidden md:block text-gray-500 px-4">Lates Arrival
                </router-link>
                <router-link to="/AllTshirt" class="hidden md:block text-gray-500 px-4">all T-shirt</router-link>
                <router-link to="/CreateTshirt" class="hidden md:block text-gray-500 px-4">Create your own Skipa
                </router-link>

            </div>

            <!-- Navigation Links -->

            <!-- Search Bar -->
            <div class="hidden md:flex items-center p-2">
                <div class="md:flex lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                    <router-link to="/ClientLogin" title="" class="link-style">
                        <img class="icon-style" :src="require('@/assets/user4.png')" alt="User" width="32"
                            height="32" />
                    </router-link>
                    <router-link to="CreateAccount" title="" class="link-style">
                        <img class="icon-style" :src="require('@/assets/ad.png')" alt="Advertisement" width="32"
                            height="32" />
                    </router-link>
                    <router-link to="/cart" title="" class="link-style">
                        <img class="icon-style" :src="require('@/assets/shopping2.png')" alt="Cart" width="32"
                            height="32" />
                    </router-link>
                    {{ count }}
                </div>
            </div>
            <!-- Mobile Menu Toggle Button -->
            <button @click="toggleMenu" class="md:hidden text-black">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>
        </div>

        <!-- Responsive Menu -->
        <div v-show="isMenuOpen"
            class="md:hidden h-[220px] z-40 w-full rounded-b ed-md absolute top-[63px] p-4 left-0 right-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <hr class="w-full h-[1px] mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700">
            <router-link to="LatestArrivals" class="block text-xs py-2 px-4 text-gray-700">Latest arrival</router-link>
            <router-link to="/about" class="block py-2 text-xs px-4 text-gray-700">Create your own Skipa</router-link>
            <router-link to="AllTshirt" class="block text-xs py-2 px-4 text-gray-700">all T-shirt</router-link>
            <router-link to="/ClientLogin" class="block py-2 text-xs px-4 text-gray-700">Login</router-link>
            <router-link to="CreateAccount" class="block text-xs py-2 px-4 text-gray-700">Signup</router-link>

            <!-- Add more responsive navigation links as needed -->
            <button @click="closeMenu" @mouseover="rotateElement" @mouseleave="resetRotation"
                class="rotate-element absolute h-10 hover:text-black hover:scale-110 hover:rotate-360 duration-500 shadow-2xl w-30 p-5 top-0 right-0 m-20 bg-gradient-to-r rounded-lg from-indigo-300 to-purple-400 text-white flex items-center justify-center">
                <!-- You can use an icon or text for the button, for example: -->
                X
            </button>
            <!-- E-commerce Link in Mobile Menu -->
        </div>
    </nav>
</template>

<script>
export default {
    components: {



    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        rotateElement() {
            const element = document.querySelector('.rotate-element');
            element.style.transform = 'rotate(180deg)';
        },
        resetRotation() {
            const element = document.querySelector('.rotate-element');
            element.style.transform = 'rotate(0deg)';
        },
    },
    computed: {
        count() {
            return this.$store.state.cartItemCount;
        },

    },



};
</script>

<style scoped>
@media screen and (max-width: 432px) {
    .bg-gray-200 {
        padding: 10px;
    }

    .shopnow {
        display: flex;
        font-size: 10px;
        width: 40%;
    }
}

.rotate-element {
    transition: transform 0.3s ease;
}

nav {
    margin-top: 60px;
    background: rgb(202, 199, 200);
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);
    border: 1px solid rgb(220, 215, 215);
    /* Adjust the value as needed */
}

.link-style {
    text-decoration: none;
    color: white;
    padding: 0.55rem;
    transition: all 0.2s;
    border-radius: 0.25rem;
    font-family: 'Poppins', sans-serif;
    /* Assuming you want to use Poppins font */
    display: flex;
    align-items: center;
}

.icon-style {
    width: 1rem;
    /* Adjust the width as needed */
    height: 1rem;
    /* Adjust the height as needed */
    object-fit: cover;
    margin-right: 0.5rem;
}

.link-style:hover {
    text-opacity: 50%;
}
</style>