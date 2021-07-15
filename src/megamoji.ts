import { createApp } from "vue";
import rollbar from "./utils/rollbar";
import App from "./components/App.vue";
import ga from "./utils/analytics";

const app = createApp(App);

app.config.errorHandler = (err: unknown) => {
  if (rollbar) {
    rollbar.error(err as Error);
  }
  throw err; // rethrow
};

app.mount("#app");

ga("send", "pageview", "/");
