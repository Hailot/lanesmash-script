<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              class="d-flex"
              cols="12"
              sm="6"
          >

            <v-select
                :items="lanes"
                label="Lane"
                outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>

</template>

<script>
export default {
name: "MatchSetup"
}
</script>

<style scoped>

</style>
