<template>
  <header>
    <div>
      <router-link to="/">Logo do Billinho</router-link>
    </div>
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
