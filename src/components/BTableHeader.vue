<template>
  <thead>
    <tr>
      <th v-for="(column, index) in columnNames" :key="index">{{ column }}</th>
      <th>Ações</th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BTableHeader",
  props: {
    columnNames: {
      type: Array,
      required: true,
    },
  },
});
</script>
