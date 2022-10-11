<template>
  <label :for="`${id}`">
    {{ label }}
    <input v-model="content" :id="`${id}`" :type="`${type}`" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BInput",
  data() {
    return {
      content: "",
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
});
</script>
