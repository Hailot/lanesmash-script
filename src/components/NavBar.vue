
  <template>
      <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <router-link to="/">
                  <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
         </router-link>
         
         <v-btn text to="/">
           
        <span class="mr-2">LaneSmash Script</span>
         </v-btn>
         
        
         

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>

</template>

<script>

export default {
  name: 'NavBar',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
