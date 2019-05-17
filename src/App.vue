<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/"><span>CODE</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isAuthenticated"
        flat
        to="/profile"
      >
        <span class="mr-2">Profile</span>
      </v-btn>
      <v-btn
        v-if="isAuthenticated"
        flat
        to="/about"
      >
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn
        v-if="!isAuthenticated"
        flat
        @click.prevent="login"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        v-if="isAuthenticated"
        flat
        @click.prevent="logout"
      >
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      //console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};

</script>

<style>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
</style>
