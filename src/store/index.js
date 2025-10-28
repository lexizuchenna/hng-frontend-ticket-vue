import { defineStore } from "pinia";
import { ref, watch } from "vue";
export const useAppStore = defineStore("app", () => {
    // 🔹 State
    const user = ref(null);
    const tickets = ref([]);
    const loading = ref(false);
    // 🔹 Load user + tickets from localStorage
    const loadSession = () => {
        const session = localStorage.getItem("ticketapp_session");
        if (session) {
            try {
                const storedUser = JSON.parse(session);
                user.value = storedUser;
                const savedTickets = localStorage.getItem(`tickets_${storedUser.email}`);
                tickets.value = savedTickets ? JSON.parse(savedTickets) : [];
            }
            catch (error) {
                console.error("Failed to load session:", error);
                localStorage.removeItem("ticketapp_session");
            }
        }
    };
    // ✅ Run immediately instead of onMounted
    loadSession();
    // 🔹 Set user (login/register)
    const setUser = (newUser) => {
        user.value = newUser;
        localStorage.setItem("ticketapp_session", JSON.stringify(newUser));
        const savedTickets = localStorage.getItem(`tickets_${newUser.email}`);
        tickets.value = savedTickets ? JSON.parse(savedTickets) : [];
    };
    // 🔹 Add a new ticket
    const addTicket = (ticketData) => {
        if (!user.value)
            return;
        const newTicket = {
            id: crypto.randomUUID(),
            ...ticketData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        tickets.value.push(newTicket);
    };
    // 🔹 Update an existing ticket
    const updateTicket = (id, updates) => {
        const index = tickets.value.findIndex((t) => t.id === id);
        if (index !== -1) {
            tickets.value[index] = {
                ...tickets.value[index],
                ...updates,
                updatedAt: new Date().toISOString(),
            };
        }
    };
    // 🔹 Delete a ticket
    const deleteTicket = (id) => {
        tickets.value = tickets.value.filter((t) => t.id !== id);
    };
    // 🔹 Logout (clear session)
    const logout = () => {
        user.value = null;
        tickets.value = [];
        localStorage.removeItem("ticketapp_session");
    };
    // 🔹 Sync user/tickets with localStorage
    watch([user, tickets], ([newUser, newTickets]) => {
        if (newUser) {
            localStorage.setItem("ticketapp_session", JSON.stringify(newUser));
            localStorage.setItem(`tickets_${newUser.email}`, JSON.stringify(newTickets));
        }
        else {
            localStorage.removeItem("ticketapp_session");
        }
    }, { deep: true });
    return {
        user,
        tickets,
        loading,
        setUser,
        addTicket,
        updateTicket,
        deleteTicket,
        logout,
        loadSession,
    };
});
