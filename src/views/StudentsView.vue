<template>
  <div>
    {{ students }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import httpClient from "@/http";
import Resources from "@/utils/resources";

export default defineComponent({
  name: "StudentsView",
  data() {
    return {
      students: [],
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents(): Promise<void> {
      const students = await httpClient.get(Resources.STUDENTS);
      const { data } = students.data;

      this.students = data;
    },
  },
});
</script>
