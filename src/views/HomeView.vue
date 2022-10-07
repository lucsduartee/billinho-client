<template>
  <div>
    {{ response }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      response: [],
    };
  },
});
</script>
