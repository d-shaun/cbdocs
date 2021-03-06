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
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      const hash = sessionStorage.redirecthash;
      delete sessionStorage.redirect;
      delete sessionStorage.redirecthash;
      this.$router.push(redirect);
      this.$router.push({ path: redirect, hash: hash });
    }
  },
}).$mount("#app");
