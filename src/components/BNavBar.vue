<template>
  <nav>
    <ul>
      <router-link to="/institutions">Instituições</router-link>
      <router-link to="/students">Alunos</router-link>
      <router-link to="/enrollments">Matrículas</router-link>
    </ul>
    <div>Avatar</div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BNavBar",
});
</script>
