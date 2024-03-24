<template>
  <div class="container">
    <ul class="menu text-right lg:menu-horizontal bg-base-200 rounded-box lg:mb-10">
      <li>
        <details>
          <summary @click="toggleDropdown">Most popular</summary>
          <ul v-if="isOpen">
            <li><router-link to="LatestArrivals">Sale</router-link></li>
            <li><router-link to="TrendingItems">Trending</router-link></li>
            <!-- Add other submenu items as needed -->
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end; /* Align items to the end (right side) */
}

.menu-item {
  display: flex;
  align-items: center; /* Center vertically */
}

.menu-button {
  margin-left: auto; /* Push the button to the right */
  margin-bottom: 400px;
}

/* Your other scoped styles */
</style>
