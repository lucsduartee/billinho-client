<template>
  <div>
    <table>
      <BTableHeader :columnNames="dataKeys(enrollments)" />
      <BTableBody :content="enrollments" />
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import httpClient from "@/http";
import Resources from "@/utils/resources";
import BTableHeader from "@/components/BTableHeader.vue";
import IEnrollments from "@/interfaces/IEnrollments";
import BTableBody from "@/components/BTableBody.vue";

export default defineComponent({
  name: "EnrollmentsView",
  components: { BTableHeader, BTableBody },
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
    dataKeys(data: Array<IEnrollments>) {
      return Object.keys(data[0]);
    },
  },
});
</script>
