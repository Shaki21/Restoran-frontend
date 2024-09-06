<template>
    <v-container fluid>
      <v-row justify="end">
        <v-col cols="12" md="5" >
          <v-card>
            <v-card-title>Create Account</v-card-title>
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
  
                <v-btn @click="submitSignUp" color="primary" block>Sign Up</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        valid: false,
        username: '',
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      };
    },
    methods: {
      submitSignUp() {
        // Your sign-up logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Dodajte stilove ako je potrebno */
  </style>