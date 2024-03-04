<template>
    <div>
        <nav
            class="relative flex flex-wrap items-center justify-between bg-gray-50 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <div class="flex m-3 space-x-4">
                    <router-link to="/TrendingItems"
                        class="text-black text-xs hover:text-gray-500">Trending</router-link>
                    <router-link to="/AmazazaView" class="text-black text-xs hover:text-gray-500">amazaza</router-link>
                    <router-link to="/LatestArrivals"
                        class="text-black text-xs hover:text-gray-500">Explore</router-link>
                    <router-link to="/SalesNow" class="text-red-400 text-xs hover:text-gray-500">SALE</router-link>
                </div>
                <div class="ml-5 flex w-full lg:w-auto items-center justify-between">
                    <input type="search" v-model="searchQuery" @input="filterItems"
                        class="relative m-0 block w-full lg:w-96 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="What are you looking for ?" aria-label="Search" aria-describedby="button-addon2" />
                    <!-- Search icon -->
                    <span
                        class="input-group-text hover:scale-125 flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 search-icon"
                        id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            items: [], // Your items array goes here
            filteredItems: [] // Initialize an array to hold filtered items
        };
    },
    methods: {
        filterItems() {
            // Reset filteredItems array
            this.filteredItems = [];

            // Filter items based on searchQuery
            if (this.searchQuery.trim() !== '') {
                this.filteredItems = this.items.filter(item => {
                    // Adjust this condition as per your item structure
                    return item.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            } else {
                this.filteredItems = [...this.items]; // If searchQuery is empty, show all items
            }
        }
    },
    mounted() {
        // Initialize filteredItems with all items initially
        this.filteredItems = [...this.items];
    }
};
</script>

<style scoped>
/* Adjust the gradient colors and other styles as needed */
nav {
    background: rgb(202, 199, 200);
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);
}

.search-icon {
    transition: transform 0.3s ease-in-out;
}

.search-icon.clicked {
    transform: rotate(45deg);
}
</style>
