<template>
  <div class="min-h-screen flex flex-col">
    <!-- The router-view renders whichever page the user is currently on -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
// No script logic needed here right now.
// This is just the app shell.
</script>

<style>
/* You can put global fallback styles here if needed */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  background-color: #f9fafb;
  color: #111827;
}
</style>
