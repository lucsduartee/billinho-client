<template>
  <div>
    {{ enrollments }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import httpClient from "@/http";
import Resources from "@/utils/resources";

export default defineComponent({
  name: "EnrollmentsView",
  data() {
    return {
      enrollments: [],
    };
  },
  created() {
    this.fetchEnrollments();
  },
  methods: {
    async fetchEnrollments(): Promise<void> {
      const enrollments = await httpClient.get(Resources.ENROLLMENTS);
      const { data } = enrollments.data;

      this.enrollments = data;
    },
  },
});
</script>
