<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useAppStore } from "../../store";

const router = useRouter();
const app = useAppStore();

const form = reactive({
  email: "",
  password: "",
});

const error = ref("");
const loading = ref(false);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  error.value = "";

  if (!form.email || !form.password) {
    error.value = "Please fill in all fields.";
    return;
  }

  loading.value = true;

  // Simulate authentication (localStorage)
  const storedUsers = JSON.parse(
    localStorage.getItem("ticketapp_users") || "[]"
  );
  const matchedUser = storedUsers.find(
    (user: any) =>
      user.email.toLowerCase() === form.email.toLowerCase() &&
      user.password === form.password
  );

  if (!matchedUser) {
    loading.value = false;
    error.value = "Invalid email or password. Please try again.";
    return;
  }

  // Save session
  localStorage.setItem("ticketapp_session", JSON.stringify(matchedUser));
  app.setUser(matchedUser);

  // Redirect
  router.push("/dashboard");
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-gray-800 px-4"
  >
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
      <h2 class="text-3xl font-bold text-center text-indigo-600 mb-6">
        Login to TicketMaster Pro
      </h2>

      <div
        v-if="error"
        class="bg-red-100 text-red-600 p-3 rounded mb-4 text-center"
      >
        {{ error }}
      </div>

      <form @submit="handleSubmit" class="flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            name="email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            name="password"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          :class="[
            loading ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700',
            'text-white font-semibold py-2 rounded-lg transition',
          ]"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-4">
        Don’t have an account?
        <RouterLink
          to="/auth/signup"
          class="text-indigo-600 font-medium hover:underline"
        >
          Sign up here
        </RouterLink>
      </p>
    </div>
  </div>
</template>
