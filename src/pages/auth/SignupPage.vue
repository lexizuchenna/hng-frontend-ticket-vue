<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-gray-800 px-4"
  >
    <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
      <h2 class="text-3xl font-bold text-center text-indigo-600 mb-6">
        Create Your Account
      </h2>

      <div
        v-if="error"
        class="bg-red-100 text-red-600 p-3 rounded mb-4 text-center"
      >
        {{ error }}
      </div>

      <div
        v-if="success"
        class="bg-green-100 text-green-700 p-3 rounded mb-4 text-center"
      >
        {{ success }}
      </div>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            name="name"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <button
          type="submit"
          class="bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-4">
        Already have an account?
        <RouterLink
          to="/auth/login"
          class="text-indigo-600 font-medium hover:underline"
        >
          Log in here
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const error = ref("");
const success = ref("");

const handleSubmit = () => {
  error.value = "";
  success.value = "";

  // Validation
  if (!form.name || !form.email || !form.password) {
    error.value = "All fields are required.";
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    error.value = "Please enter a valid email address.";
    return;
  }

  // LocalStorage user DB
  const storedUsers = JSON.parse(
    localStorage.getItem("ticketapp_users") || "[]"
  );

  const existingUser = storedUsers.find(
    (user: any) => user.email.toLowerCase() === form.email.toLowerCase()
  );

  if (existingUser) {
    error.value = "An account with this email already exists.";
    return;
  }

  // Create new user
  const newUser = {
    id: crypto.randomUUID(),
    name: form.name,
    email: form.email,
    password: form.password, // (Would be hashed in real apps)
  };

  // Save to localStorage
  const updatedUsers = [...storedUsers, newUser];
  localStorage.setItem("ticketapp_users", JSON.stringify(updatedUsers));

  success.value = "Signup successful! Redirecting to login...";
  setTimeout(() => router.push("/auth/login"), 1500);
};
</script>
