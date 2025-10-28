<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4"
  >
    <div class="max-w-[1440px] mx-auto">
      <h1 class="text-3xl font-bold text-indigo-600 mb-8">Ticket Management</h1>

      <!-- Form Section -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          {{ editingId ? "Edit Ticket" : "Create a New Ticket" }}
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

        <form
          @submit.prevent="handleSubmit"
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label class="block text-sm font-medium mb-1">Title *</label>
            <input
              v-model="form.title"
              type="text"
              name="title"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Ticket title"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Status *</label>
            <select
              v-model="form.status"
              name="status"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Priority</label>
            <select
              v-model="form.priority"
              name="priority"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium mb-1">Description</label>
            <textarea
              v-model="form.description"
              name="description"
              rows="3"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Describe the issue..."
            ></textarea>
          </div>

          <div class="md:col-span-2 flex gap-3">
            <button
              type="submit"
              class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              {{ editingId ? "Update Ticket" : "Create Ticket" }}
            </button>
            <button
              v-if="editingId"
              type="button"
              @click="cancelEdit"
              class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Ticket List -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Your Tickets</h2>

        <p v-if="tickets.length === 0" class="text-gray-500 text-center py-6">
          No tickets available. Create one above!
        </p>

        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="ticket in tickets"
            :key="ticket.id"
            class="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between border-t-4"
            :style="{ borderColor: getBorderColor(ticket.status) }"
          >
            <div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">
                {{ ticket.title }}
              </h3>
              <p class="text-sm text-gray-600 mb-2">
                {{ ticket.description || "No description provided." }}
              </p>

              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="getStatusBadge(ticket.status)"
                >
                  {{ formatStatus(ticket.status) }}
                </span>
                <span
                  v-if="ticket.priority"
                  class="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700 font-medium"
                >
                  {{ ticket.priority.toUpperCase() }}
                </span>
              </div>
            </div>

            <div class="flex justify-end gap-3 mt-4">
              <button
                @click="handleEdit(ticket.id)"
                class="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Edit
              </button>
              <button
                @click="handleDelete(ticket.id)"
                class="text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../store"; // ✅ relative import

interface TicketForm {
  id?: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
  priority: "low" | "medium" | "high";
}

const router = useRouter();
const store = useAppStore(); // ✅ Using Pinia store

const form = reactive<TicketForm>({
  title: "",
  description: "",
  status: "open",
  priority: "medium",
});

const error = ref("");
const success = ref("");
const editingId = ref<string | null>(null);

const { user, tickets, addTicket, updateTicket, deleteTicket } = store;

// Route protection
onMounted(() => {
  if (!user) router.push("/auth/login");
});

// Helpers
const resetForm = () => {
  form.title = "";
  form.description = "";
  form.status = "open";
  form.priority = "medium";
};

const handleSubmit = () => {
  if (!form.title.trim()) {
    error.value = "Title is required.";
    return;
  }

  if (!["open", "in_progress", "closed"].includes(form.status)) {
    error.value = "Invalid status value.";
    return;
  }

  if (editingId.value) {
    updateTicket(editingId.value, { ...form });
    success.value = "Ticket updated successfully!";
    editingId.value = null;
  } else {
    addTicket({ ...form });
    success.value = "Ticket created successfully!";
  }

  resetForm();
  error.value = "";
  setTimeout(() => (success.value = ""), 2000);
};

const handleEdit = (id: string) => {
  const ticket = tickets.find((t) => t.id === id);
  if (ticket) {
    editingId.value = ticket.id;
    form.title = ticket.title;
    form.description = ticket.description || "";
    form.status = ticket.status;
    form.priority = ticket.priority || "medium";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleDelete = (id: string) => {
  if (confirm("Are you sure you want to delete this ticket?")) {
    deleteTicket(id);
    success.value = "Ticket deleted successfully!";
    setTimeout(() => (success.value = ""), 2000);
  }
};

const cancelEdit = () => {
  editingId.value = null;
  resetForm();
};

// UI helpers
const getBorderColor = (status: string) => {
  switch (status) {
    case "open":
      return "#16a34a";
    case "in_progress":
      return "#f59e0b";
    default:
      return "#6b7280";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return "bg-green-100 text-green-700";
    case "in_progress":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const formatStatus = (status: string) => status.replace("_", " ").toUpperCase();
</script>
