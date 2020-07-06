<template>
  <v-container>
    <div class="title mb-2">Commands</div>
    <div class="caption grey--text mb-4">
      The default prefix is
      <code>&</code>.
    </div>
    <v-card v-for="command in commands" :key="command.name" class="my-6">
      <v-card-title>
        <v-btn
          text
          color="primary"
          :to="{  hash: '#' + command.name }"
          :id="command.name"
          :name="command.name"
        >&{{command.name}}</v-btn>
        <!-- &{{command.name}} -->
        <div class="grey--text ml-3 caption" v-if="command.aliases && command.aliases.length">
          |
          <span v-for="alias in command.aliases" :key="alias" class="mr-2">
            <code>&{{alias}}</code>
          </span>
        </div>
        <v-spacer></v-spacer>
        <v-tooltip bottom v-if="command.require_login">
          <template v-slot:activator="{ on, attrs }">
            <v-icon small v-bind="attrs" v-on="on">mdi-information</v-icon>
          </template>
          <span>Requires user to be logged into the bot</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text class="black--text">
        <div class="subtitle-2">{{command.description}}</div>
        <div v-if="command.usage && command.usage.length">
          <v-divider class="my-2"></v-divider>
          <div class="mb-2">Usage:</div>
          <div v-for="usage in command.usage" :key="usage">
            <code>&{{usage}}</code>
          </div>
        </div>

        <div v-if="command.examples && command.examples.length">
          <v-divider class="my-2"></v-divider>
          <div class="mb-2">Examples:</div>
          <div v-for="example in command.examples" :key="example">
            <code>&{{example}}</code>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>


<script>
// import get_commands from "../components/commands.js";
// let commands = get_commands();
// console.log(commands);
export default {
  components: {},
  data() {
    return {};
  },
  mounted: function() {
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1);
    }
    // setTimeout(() => this.scrollFix(this.$route.hash), 1);
  },
  methods: {
    scrollTo: function(hashtag) {
      setTimeout(() => {
        location.href = hashtag;
      }, 1);
    }
  },
  computed: {
    commands() {
      console.log(this.$store.getters.public_commands);
      return this.$store.getters.public_commands;
    }
  }
};
</script>

<style>
</style>