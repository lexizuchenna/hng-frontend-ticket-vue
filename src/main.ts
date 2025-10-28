import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useAppStore } from "./store";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const store = useAppStore(pinia);
store.loadSession(); // ✅ load user session before routing

app.use(router);
app.mount("#app");
