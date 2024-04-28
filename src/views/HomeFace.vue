<template>
  <div class="HomeFace">
    <SalesText />
    <LatestSkipas />

    <div class="product-cards-container">
      <DashBoard />

      <PopeUp />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SalesText from "../components/common/SalesText.vue";
import LatestSkipas from "../components/common/LatestSkipas.vue";
import DashBoard from "../components/common/DashBoard.vue";

import PopeUp from "../components/PopeUp.vue";

export default {
  name: "HomeFace",
  components: { DashBoard, LatestSkipas, SalesText, PopeUp },

  data() {
    return {
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style></style>
