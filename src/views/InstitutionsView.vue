<template>
  <div>
    {{ institutions }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { FETCH_INSTITUTIONS } from "@/store/actionsTypes";

export default defineComponent({
  name: "InstitutionsView",
  setup() {
    const store = useStore();
    store.dispatch(FETCH_INSTITUTIONS);
    return {
      institutions: computed(() => store.state.institutions),
    };
  },
});
</script>
