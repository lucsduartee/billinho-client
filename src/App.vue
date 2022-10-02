<template>
  <main>
    <BHeaderVue />
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BHeaderVue from "./components/BHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    BHeaderVue,
  },
});
</script>
