<template>
  <header>
    <div>Logo do Billinho</div>
    <BNavBarVue />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BNavBarVue from "./BNavBar.vue";

export default defineComponent({
  name: "BHeader",
  components: {
    BNavBarVue,
  },
});
</script>
