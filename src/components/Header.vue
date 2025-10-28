<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { Menu, X } from "lucide-vue-next";
import { useAppStore } from "../store";

const router = useRouter();
const store = useAppStore();

const isMenuOpen = ref(false);
const isLoggedIn = computed(() => !!store.user);

const handleLogout = () => {
  store.logout();
  isMenuOpen.value = false;
  router.push("/");
};
</script>

<template>
  <header class="w-full bg-white shadow-sm sticky top-0 z-50">
    <div
      class="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between"
    >
      <!-- Logo / Brand -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition"
      >
        TicketMaster Pro
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6">
        <template v-if="isLoggedIn">
          <RouterLink
            to="/dashboard"
            class="text-gray-700 hover:text-indigo-600 transition font-medium"
          >
            Dashboard
          </RouterLink>
          <RouterLink
            to="/tickets"
            class="text-gray-700 hover:text-indigo-600 transition font-medium"
          >
            Tickets
          </RouterLink>
          <button
            @click="handleLogout"
            class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <RouterLink
            to="/auth/login"
            class="text-gray-700 hover:text-indigo-600 transition font-medium"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/auth/signup"
            class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Sign Up
          </RouterLink>
        </template>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
        aria-label="Toggle menu"
      >
        <component :is="isMenuOpen ? X : Menu" size="26" />
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white shadow-inner border-t border-gray-100"
      >
        <nav class="flex flex-col items-center gap-4 py-4">
          <template v-if="isLoggedIn">
            <RouterLink
              to="/dashboard"
              @click="isMenuOpen = false"
              class="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Dashboard
            </RouterLink>
            <RouterLink
              to="/tickets"
              @click="isMenuOpen = false"
              class="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Tickets
            </RouterLink>
            <button
              @click="handleLogout"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Logout
            </button>
          </template>

          <template v-else>
            <RouterLink
              to="/auth/login"
              @click="isMenuOpen = false"
              class="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/auth/signup"
              @click="isMenuOpen = false"
              class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Sign Up
            </RouterLink>
          </template>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
