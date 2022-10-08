<template>
  <div>
    <table>
      <BTableHeader :columnNames="dataKeys(students)" />
      <BTableBody :content="students" />
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { FETCH_STUDENTS } from "@/store/actionsTypes";
import IStudents from "@/interfaces/IStudents";
import BTableHeader from "@/components/BTableHeader.vue";
import BTableBody from "@/components/BTableBody.vue";

export default defineComponent({
  name: "StudentsView",
  components: { BTableHeader, BTableBody },
  setup() {
    const store = useStore();
    store.dispatch(FETCH_STUDENTS);
    return {
      students: computed(() => store.state.students.students),
    };
  },
  methods: {
    dataKeys(data: Array<IStudents>) {
      return Object.keys(data[0]);
    },
  },
});
</script>
