<template>
  <div>
    <table>
      <BTableHeader :columnNames="dataKeys(institutions)" />
      <BTableBody :content="institutions" />
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { FETCH_INSTITUTIONS } from "@/store/actionsTypes";
import BTableHeader from "@/components/BTableHeader.vue";
import IInstitutions from "@/interfaces/IInstitutions";
import BTableBody from "@/components/BTableBody.vue";

export default defineComponent({
  name: "InstitutionsView",
  components: { BTableHeader, BTableBody },
  setup() {
    const store = useStore();
    store.dispatch(FETCH_INSTITUTIONS);
    return {
      institutions: computed(() => store.state.institutions.institutions),
    };
  },
  methods: {
    dataKeys(data: Array<IInstitutions>) {
      return Object.keys(data[0]);
    },
  },
});
</script>
