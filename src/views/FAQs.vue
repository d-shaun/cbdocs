<template>
  <v-container>
    <div class="title mb-2">FAQs</div>
    <div class="caption grey--text mb-4">
      The default prefix is
      <code>&</code>.
    </div>

    <v-expansion-panels hover popout v-model="current">
      <v-expansion-panel v-for="howto in howtos" :key="howto.id" @click="handleURL(howto.id)">
        <v-expansion-panel-header class="font-weight-bold">{{howto.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-html="howto.text"></div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FAQs",
  components: {},
  data() {
    return {
      current: null,
      howtos: [
        {
          id: "login",
          title: "How to login to/logout of the bot?",
          text:
            "To login to the bot, you need to <code>&login [username]</code>, <sup><a href='/commands#login'>[ref]</a></sup> replacing <code>[username]</code> with your Last.fm username; example: <code>&login JohnDoe</code>. And, to logout, simply <code>&logout</code>. <sup><a href='/commands#logout'>[ref]</a></sup>"
        },
        {
          id: "erasecrowns",
          title: "How do I erase my crowns from the bot?",
          text:
            "You can <code>&deletecrowns</code> to delete your crowns in a server, and <code>&deletecrowns global</code> to delete all of your crowns in every server you have crowns in.<sup><a href='/commands#deletecrowns'>[ref]</a></sup>"
        },
        {
          id: "betacommands",
          title: "What are beta commands and how do I access them?",
          text: `Beta commands are generally unstable commands with some of them having similar aliases to FMCord's commands.
            <br> To access them, you can either: 
            <ul>
            <li>enable beta commands in the server with <code>&beta</code>; <sup><a href='/commands#beta'>[ref]</a></sup></li>
            <li>prepend <code>b:</code> before the command name; examples: <code>&b:list</code>, <code>&b:taste</code>.
            </ul>
            To see a list of the beta commands: <code>&commands beta</code>.
            `
        },
        {
          id: "reportbugs",
          title: "Where to report bugs?",
          text: `<b>#bug-reports</b> in the support server: <a href='https://discord.gg/zzJ5zmA' target="_blank">https://discord.gg/zzJ5zmA</a>.`
        },
        {
          id: "behappy",
          title: "How to be happy?",
          text: `<img src='https://i.imgur.com/kvghSaj.gif'>`
        }
      ]
    };
  },
  mounted: function() {
    let hash = this.$route.hash;
    if (hash) {
      hash = hash.slice(1);
      const index = this.howtos.findIndex(howto => howto.id.startsWith(hash));
      if (index) this.current = index;
    }
  },
  methods: {
    handleURL: function(id) {
      if (this.$route.hash !== "#" + id) this.$router.push({ hash: id });
    }
  }
};
</script>
