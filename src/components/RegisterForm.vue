<template>
  <v-container fluid class="full-screen">
      <v-col cols="12" sm="6" class="gradient-background">
        <v-text class="welcome-back">Welcome back!</v-text>

        <v-btn @click="submitSignUp" color="blue" >Sign In</v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="custom-card">
          <v-card-title class="v-card-title">Create Account</v-card-title>
          <v-card-text>
            <v-form ref="signupForm" v-model="valid">
              <v-text-field
                v-model="username"
                label="Username"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="[rules.required, rules.min]"
                required
              ></v-text-field>

              <v-btn @click="submitSignUp" color="blue" block>Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
  </v-container>
</template>

<style>
.full-screen {
  height: 100vh;
  width: 100vw;
  display: flex;
  
}
.gradient-background {
  background: linear-gradient(45deg, royalblue, lightblue);
  height: full;
}
.custom-card {
  height: 40vh;
  width: 40vw;
  margin-top: 25vh;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}
.v-card-title {
  text-align: center;
}
.welcome-back {
  font-size: 3em;
  text-align: center;
  color: white;
  
}


</style>

<script>
export default {
  data() {
    return {
      valid: false,
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: value => value.length >= 6 || 'Min 6 characters',
      },
    };
  },
  methods: {
    submitSignUp() {
      // Your submit logic here
    },
  },
};
</script>