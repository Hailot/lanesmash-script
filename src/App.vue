<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
          <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>
