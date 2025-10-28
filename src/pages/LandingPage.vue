<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex flex-col items-center text-gray-800">
    <!-- Hero Section -->
    <header
      class="relative w-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden"
    >
      <div
        class="max-w-[1440px] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div class="z-10 max-w-lg">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">TicketMaster Pro</h1>
          <p class="text-lg md:text-xl mb-6">
            Manage, track, and resolve tickets effortlessly — all in one place.
          </p>
          <div class="flex gap-4">
            <RouterLink
              to="/auth/login"
              class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/auth/signup"
              class="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition"
            >
              Get Started
            </RouterLink>
          </div>
        </div>

        <!-- Hero Decorative Image -->
        <div class="relative w-full md:w-1/2 flex justify-center">
          <div
            class="relative bg-white bg-opacity-20 rounded-full p-10 backdrop-blur-lg"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3570/3570352.png"
              alt="Ticket management illustration"
              class="w-48 md:w-64"
            />
          </div>
          <div
            class="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-70 blur-lg"
          ></div>
        </div>
      </div>

      <!-- Animated Wave SVG -->
      <div
        style="position: relative; width: 100%; height: 200px; overflow: hidden"
      >
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          style="width: 100%; height: 100%"
        >
          <path
            fill="#ffcf98"
            d="M0,200.0 L0.0,100.0 L 50.0,108.4 L 100.0,112.8 L 150.0,111.2 L 200.0,104.4 L 250.0,95.4 L 300.0,88.7 L 350.0,87.2 L 400.0,91.8 L 450.0,100.2 L 500.0,108.5 L 550.0,112.8 L 600.0,111.1 L 650.0,104.1 L 700.0,95.2 L 750.0,88.6 L 800.0,87.3 L 850.0,92.0 L 900.0,100.4 L 950.0,108.7 L 1000.0,112.9 L1000.0,200.0 L0,200.0Z"
          >
            <animate
              attributeName="d"
              dur="8.0s"
              repeatCount="indefinite"
              values="
                M0,200.0 L0.0,100.0 L 50.0,108.4 L 100.0,112.8 L 150.0,111.2 L 200.0,104.4 L 250.0,95.4 L 300.0,88.7 L 350.0,87.2 L 400.0,91.8 L 450.0,100.2 L 500.0,108.5 L 550.0,112.8 L 600.0,111.1 L 650.0,104.1 L 700.0,95.2 L 750.0,88.6 L 800.0,87.3 L 850.0,92.0 L 900.0,100.4 L 950.0,108.7 L 1000.0,112.9 L1000.0,200.0 L0,200.0Z;
                M0,200.0 L0.0,100.0 L 50.0,91.6 L 100.0,87.2 L 150.0,88.8 L 200.0,95.6 L 250.0,104.6 L 300.0,111.3 L 350.0,112.8 L 400.0,108.2 L 450.0,99.8 L 500.0,91.5 L 550.0,87.2 L 600.0,88.9 L 650.0,95.9 L 700.0,104.8 L 750.0,111.4 L 800.0,112.7 L 850.0,108.0 L 900.0,99.6 L 950.0,91.3 L 1000.0,87.1 L1000.0,200.0 L0,200.0Z;
                M0,200.0 L0.0,100.0 L 50.0,108.4 L 100.0,112.8 L 150.0,111.2 L 200.0,104.4 L 250.0,95.4 L 300.0,88.7 L 350.0,87.2 L 400.0,91.8 L 450.0,100.2 L 500.0,108.5 L 550.0,112.8 L 600.0,111.1 L 650.0,104.1 L 700.0,95.2 L 750.0,88.6 L 800.0,87.3 L 850.0,92.0 L 900.0,100.4 L 950.0,108.7 L 1000.0,112.9 L1000.0,200.0 L0,200.0Z"
            />
          </path>
        </svg>
      </div>
    </header>

    <!-- Features Section -->
    <section class="max-w-[1440px] w-full px-6 py-16 grid gap-8 md:grid-cols-3">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
      >
        <h3 class="text-xl font-semibold mb-3 text-indigo-600">
          {{ feature.title }}
        </h3>
        <p class="text-gray-600">{{ feature.text }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      features: [
        {
          title: "Smart Ticket Tracking",
          text: "Track your open, in-progress, and closed tickets in real time.",
        },
        {
          title: "Collaborative Workspace",
          text: "Empower teams to resolve issues together faster and more efficiently.",
        },
        {
          title: "Data Insights",
          text: "Gain visibility into your ticket statistics with clean visual dashboards.",
        },
      ],
    };
  },
};
</script>
