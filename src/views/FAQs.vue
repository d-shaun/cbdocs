<template>
  <v-container>
    <div class="title mb-2">FAQs</div>
    <div class="caption grey--text mb-4">
      The default prefix is
      <code>&</code>.
    </div>

    <v-expansion-panels hover popout v-model="current">
      <v-expansion-panel
        v-for="howto in howtos"
        :key="howto.id"
        @click="handleURL(howto.id)"
      >
        <v-expansion-panel-header class="font-weight-bold">{{
          howto.title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-html="howto.text"></div>
          <div v-if="howto.references">
            <v-divider class="my-3"></v-divider>
            <div class="caption">
              References:
              <ul class="my-1">
                <li
                  v-for="(reference, i) in howto.references"
                  :key="reference"
                  style="list-style: none"
                >
                  {{ i + 1 }}.
                  <router-link :to="reference">{{
                    parse_reference(reference)
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>
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
          id: "invite",
          title: "How do I invite this bot to my server?",
          text: `Follow this url: <a href='https://discordapp.com/api/oauth2/authorize?client_id=636075999154536449&permissions=288832&scope=bot' target="_blank">https://discordapp.com/api/oauth2/authorize?client_id=636075999154536449&permissions=288832&scope=bot</a>.`,
        },
        {
          id: "login",
          title: "How to login to/logout of the bot?",
          text:
            "To login to the bot, you need to <code>&login [username]</code>, <sup>[1]</sup> replacing <code>[username]</code> with your Last.fm username; example: <code>&login JohnDoe</code>. And, to logout, simply <code>&logout</code>. <sup>[2]</sup>",
          references: ["/commands#login", "/commands#logout"],
        },
        {
          id: "minimumrequiredplays",
          title:
            "How do I set minimum required plays to acquire a crown in my server?",
          text:
            "Use the <code>minplaysforcrown</code> option in the <code>&config</code> <sup>[1]</sup> command in server you own or have MANAGE_SERVER permission in.<br>" +
            "For example: <li><code>&config minplaysforcrown 20</code> would require users to have minimum of 20 plays to acquire a crown in the server.<br>" +
            "<br>See <code>&config minplaysforcrown</code> for more information.",
          references: ["/commands#config"],
        },
        {
          id: "erasecrowns",
          title: "How do I erase my crowns from the bot?",
          text:
            "You can <code>&deletecrowns</code> to delete your crowns in a server, and <code>&deletecrowns global</code> to delete all of your crowns in every server you have crowns in.<sup>[1]</sup>",
          references: ["/commands#deletecrowns"],
        },
        {
          id: "betacommands",
          title: "What are beta commands and how do I access them?",
          text: `Beta commands are generally unstable commands with some of them having similar aliases to FMCord's commands.
            <br> To access them, you can either: 
            <ul>
            <li>enable beta commands in the server with <code>&beta</code>; <sup>[1]</sup></li>
            <li>prepend <code>b:</code> before the command name; examples: <code>&b:list</code>,<sup>[2]</sup> <code>&b:taste</code>. <sup>[3]</sup>
            </ul>
            To see a list of the beta commands: <code>&commands beta</code>. <sup>[4]</sup>
            `,
          references: [
            "/commands#beta",
            "/commands#list",
            "/commands#taste",
            "/commands#commands",
          ],
        },
        {
          id: "reportbugs",
          title: "Where to report bugs?",
          text: `<b>#bug-reports</b> in the support server: <a href='https://discord.gg/zzJ5zmA' target="_blank">https://discord.gg/zzJ5zmA</a>.`,
        },
        {
          id: "behappy",
          title: "How to be happy?",
          text: `<img src='https://i.imgur.com/kvghSaj.gif' style='display:block; max-width: 100%;'>`,
        },
      ],
    };
  },
  mounted: function () {
    let hash = this.$route.hash;
    if (hash) {
      hash = hash.slice(1);
      const index = this.howtos.findIndex((howto) => howto.id.startsWith(hash));
      if (index > -1) this.current = index;
    }
  },
  methods: {
    parse_reference: function (reference) {
      const command = reference.split("#");
      if (command[0] === "/commands") {
        return "&" + command[1] + " command";
      }
      return reference;
    },
    handleURL: function (id) {
      if (this.$route.hash !== "#" + id) this.$router.push({ hash: id });
    },
  },
};
</script>
