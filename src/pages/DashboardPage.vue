<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4"
  >
    <div class="max-w-[1440px] mx-auto">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-10">
        <h1 class="text-3xl font-bold text-indigo-600">
          Welcome back, {{ user?.name || "User" }} 👋
        </h1>

        <button
          @click="handleLogout"
          class="mt-4 sm:mt-0 bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div
          class="bg-white shadow-md rounded-xl p-6 border-t-4 border-indigo-500"
        >
          <h3 class="text-gray-500 text-sm font-medium">Total Tickets</h3>
          <p class="text-3xl font-bold text-gray-800 mt-2">{{ stats.total }}</p>
        </div>

        <div
          class="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-500"
        >
          <h3 class="text-gray-500 text-sm font-medium">Open</h3>
          <p class="text-3xl font-bold text-green-600 mt-2">{{ stats.open }}</p>
        </div>

        <div
          class="bg-white shadow-md rounded-xl p-6 border-t-4 border-amber-500"
        >
          <h3 class="text-gray-500 text-sm font-medium">In Progress</h3>
          <p class="text-3xl font-bold text-amber-600 mt-2">
            {{ stats.inProgress }}
          </p>
        </div>

        <div
          class="bg-white shadow-md rounded-xl p-6 border-t-4 border-gray-400"
        >
          <h3 class="text-gray-500 text-sm font-medium">Closed</h3>
          <p class="text-3xl font-bold text-gray-600 mt-2">
            {{ stats.closed }}
          </p>
        </div>
      </div>

      <!-- Action Section -->
      <div class="bg-white shadow-md rounded-2xl p-8 text-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-3">
          Manage Your Tickets
        </h2>
        <p class="text-gray-600 mb-6">
          Create, edit, or track your tickets easily from the management page.
        </p>

        <button
          @click="router.push('/tickets')"
          class="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
        >
          Go to Ticket Management
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../store"; // ✅ relative import

const router = useRouter();
const store = useAppStore(); // ✅ use Pinia store
const { user, tickets, logout } = store;

// ✅ computed ticket stats
const stats = computed(() => {
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "open").length;
  const inProgress = tickets.filter((t) => t.status === "in_progress").length;
  const closed = tickets.filter((t) => t.status === "closed").length;
  return { total, open, inProgress, closed };
});

// ✅ logout action
const handleLogout = () => {
  logout();
  router.push("/");
};
</script>
