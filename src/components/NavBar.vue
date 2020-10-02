 <template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/LaneSmash.png')"
          transition="scale-transition"
          width="70"
        />
      </router-link>

      <v-btn text to="/">
        <span class="mr-2">LaneSmash Script</span>
      </v-btn>
    </div>

    <v-spacer></v-spacer>
    <v-btn to="/admin">
      <span class="mr-2">Admin</span>
    </v-btn>
    <v-btn to="/teams">
      <span class="mr-2">Teams</span>
    </v-btn>
    <v-btn to="/overlay">
      <span class="mr-2">Overlay</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  components: {},

  data: () => ({
    //
  }),
};
</script>
