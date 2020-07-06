import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
Vue.use(Vuex);
const commands = require("./dynamic/commands.json");
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    commands,
  },
  getters: {
    all_commands: (state) => {
      return state.commands;
    },
    public_commands: (state) => {
      return state.commands.filter((command) => !command.owner_only);
    },
  },
});
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
