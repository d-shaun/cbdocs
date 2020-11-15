<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-center">
        <img src="https://i.imgur.com/a6zovhE.png" />

        <div class="text-h5">CrownBot</div>
        <div class="text-subtitle-1 grey--text">A Discord bot that uses the Last.fm API to track scrobbles and rank users.</div>
        <div class="my-4">
          <v-btn
            tile
            outlined
            color="success"
            small
            class="ma-1"
            href="https://discordapp.com/api/oauth2/authorize?client_id=636075999154536449&permissions=288832&scope=bot"
            target="_blank"
          >
            <v-icon left>mdi-plus</v-icon>Invite bot
          </v-btn>
          <v-btn
            tile
            outlined
            color="pink"
            small
            class="ma-1"
            href="https://discord.gg/zzJ5zmA"
            target="_blank"
          >
            <v-icon left>mdi-forum</v-icon>Discord server
          </v-btn>
          <v-btn
            tile
            outlined
            color="purple"
            small
            class="ma-1"
            href="https://github.com/d-shaun/CrownBot/releases"
            target="_blank"
          >
            <v-icon left>mdi-update</v-icon>Releases
          </v-btn>
          <v-btn
            tile
            outlined
            color="blue"
            small
            class="ma-1"
            href="https://github.com/d-shaun/CrownBot"
            target="_blank"
          >
            <v-icon left>mdi-web</v-icon>Visit repo
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
