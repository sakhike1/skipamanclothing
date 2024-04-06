<template>
  <div>
    <nav
      class="relative flex flex-wrap items-center justify-between bg-gray-50 py-2 text-neutral-300 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="flex m-3 space-x-4">
          <router-link
            to="/TrendingItems"
            class="text-gray-500 text-xs hover:text-gray-300"
            >Trending</router-link
          >
          <router-link to="/AmazazaView" class="text-gray-500 text-xs hover:text-gray-300"
            >amazaza</router-link
          >
          <router-link
            to="/LatestArrivals"
            class="text-gray-500 text-xs hover:text-gray-300"
            >Explore</router-link
          >
          <router-link to="/SalesNow" class="text-red-400 text-xs hover:text-gray-500"
            >SALE</router-link
          >
        </div>
        <div class="ml-5 flex w-full lg:w-auto items-center justify-between relative">
          <input
            type="search"
            v-model="input"
            @input="filterItems"
            class="relative m-0 block w-full lg:w-96 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="What are you looking for ?"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <!-- Search icon -->
          <span
            class="input-group-text hover:scale-125 flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 search-icon"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </nav>
    <div class="right-panel" v-if="input" data-aos="fade-right">
      <h2 class="text-gray-200 text-lg font-bold mb-4">TRENDING SEARCHES</h2>
      <div class="flex flex-wrap justify-center">
        <router-link
          v-for="(trendingItem, index) in trendingSearchItems"
          :key="index"
          to="/AllTshirt"
          @click.native="closeSearchContainer"
          class="flex items-center bg-gray-700 rounded-full px-4 py-2 mr-2 mb-2 text-gray-100"
        >
          <span>#{{ trendingItem }}</span>
        </router-link>
      </div>
      <div v-if="filteredItems.length > 0">
        <div
          class="flex flex-col md:flex-row border-b border-gray-400 py-4"
          v-for="(item, index) in filteredItems"
          :key="index"
        >
          <div class="flex-shrink-0">
            <img :src="item.src" :alt="item.name" class="w-16 h-16 object-cover" />
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <h2 class="text-md text-gray-300 font-bold">{{ item.title }}</h2>
            <p class="text-xs font-semibold text-gray-300 cursor-auto my-3">
              R{{ item.price }}
            </p>
          </div>
        </div>
      </div>
      <div class="item error flex flex-col items-center justify-center" v-else>
        <p>No results found!</p>
        <img
          class="w-full max-w-md h-56 object-contain"
          :src="require('@/assets/Noitems.png')"
          alt=""
        />
      </div>
      <!-- Centered button for viewing products -->
      <div class="flex justify-center mt-8">
        <router-link
          to="/LatestArrivals"
          class="py-2 px-4 flex rounded-full justify-center hover:scale-110 items-center bg-gradient-to-r from-slate-500 to-yellow-100 hover:bg-slate-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md max-w-md"
          @click.native="closeSearchContainer"
        >
          <button type="button">View all</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      excludedTrendingItems: [
        "Plain T-shirt",
        "latest T-shirt",
        "Winter hoodies",
        "Black Hoodies",
        "Sneakers",
      ],
    };
  },
  computed: {
    filteredItems() {
      // Filter items except for trending searches and exclude duplicates
      return this.$store.state.items.filter(
        (item) =>
          item.name.toLowerCase().includes(this.input.toLowerCase()) &&
          !this.excludedTrendingItems.includes(item.name)
      );
    },
    trendingSearchItems() {
      // Return trending search items excluding duplicates
      return Array.from(new Set(this.excludedTrendingItems));
    },
  },
  methods: {
    closeSearchContainer() {
      this.input = ""; // Set input to empty string to close the search container
    },
  },
};
</script>

<style scoped>
/* Adjust the gradient colors and other styles as needed */
nav {
  background: rgb(202, 199, 200);
  background: linear-gradient(
    90deg,
    rgba(254, 250, 252, 1) 0%,
    rgba(242, 248, 255, 1) 100%
  );
}

.right-panel {
  position: absolute;
  top: calc(25.2% + 10px); /* Adjust this value according to your preference */
  width: 30%;
  background-image: linear-gradient(
    to right,
    rgb(156, 163, 175),
    rgb(75, 85, 99),
    rgb(30, 64, 175)
  );
  padding: 20px;
  z-index: 10;
  height: 550px;
  color: white;
  right: 0px;
}

.search-icon {
  transition: transform 0.3s ease-in-out;
}

.search-icon.clicked {
  transform: rotate(45deg);
}

.btn {
  width: 100%;
}

.item.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
