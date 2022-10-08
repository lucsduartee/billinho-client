<template>
  <tbody>
    <tr v-for="(item, index) in content" :key="index">
      <td v-for="(value, index) in item" :key="index">
        {{ value }}
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BTableBody",
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
});
</script>
