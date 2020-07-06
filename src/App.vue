<template>
  <v-app>
    <v-navigation-drawer dark app>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://i.imgur.com/a6zovhE.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>CrownBot</v-list-item-title>
            <v-list-item-subtitle>A Discord bot.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-btn icon color="blue" v-if="!nav" @click="nav=true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <router-view></router-view>
    </v-main>
    <v-bottom-navigation app class="hidden-lg-and-up">
      <v-list-item link v-for="item in items" :key="item.title" :to="item.link">
        <!-- <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>-->

        <v-list-item-content class="text-center">
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-bottom-navigation>
  </v-app>
  <!-- 
    <navbar>
      <router-view></router-view>
    </navbar>
  -->
</template>

<script>
import navbar from "@/components/navbar";
export default {
  components: { navbar },
  data() {
    return {
      nav: true,
      items: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home"
        },
        {
          title: "Commands",
          link: "/commands",
          icon: "mdi-format-list-text"
        },
        {
          title: "FAQs",
          link: "/faqs",
          icon: "mdi-information"
        }
      ]
    };
  }
};
</script>

<style>
</style>