<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="w-full bg-gray-100 mt-16">
    <div
      class="max-w-[1440px] mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600"
    >
      <!-- Left Section -->
      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold text-indigo-600">TicketMaster Pro</h3>
        <p class="text-sm text-gray-500 mt-1">
          Simplify your ticket tracking and team collaboration.
        </p>
      </div>

      <!-- Right Section -->
      <div class="text-sm text-gray-500 text-center md:text-right">
        © {{ currentYear }} TicketMaster Pro — All rights reserved.
      </div>
    </div>
  </footer>
</template>
