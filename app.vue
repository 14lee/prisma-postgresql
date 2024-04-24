<script setup lang="ts">
const { data: user } = await useFetch('/api/user');
</script>

<template>
  <div>
    {{ user }}
    <!-- <NuxtWelcome /> -->
  </div>
</template>
