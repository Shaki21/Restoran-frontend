<template>
  <v-container fluid class="full-screen">
      <v-col cols="12" sm="6" class="gradient-background">
        <div class="title">
          <v-text class="welcome-back">Welcome back!</v-text>
          <v-text class="subtitle">If you already have account please Sign in from here!</v-text>
          <v-btn rounded="xl" @click="submitSignIn" color="blue" >Sign In</v-btn>
        </div>

      </v-col>
        <v-card flat class="custom-card">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <v-card-title class="v-card-title">Create Account</v-card-title>
          <v-card-text>
            <v-form ref="signupForm" class="form" v-model="valid">
              <v-text-field
                v-model="username"
                label="Username"
                :rules="[rules.required]"
                required
                rounded="0"
                prepend-inner-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="[rules.required, rules.min]"
                required
                rounded="0"
                prepend-inner-icon="mdi-lock"
              ></v-text-field>

              <v-btn flat rounded="0" @click="submitSignUp" color="blue" block>Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
  </v-container>
</template>


<script>
import axios from 'axios';

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
      if(this.valid) {
        const user = {
          username: this.username, 
          password: this.password
        };
        axios.post('http://localhost:8080/api/users', user)
          .then(response => {
            console.log('User created', response.data);
            // Ovdje možeš dodati logiku, npr. preusmjeravanje na drugu stranicu
            this.$router.push({path: '/additional-information', query: {username: this.username}});
          })
          .catch(error => {
            console.error('Error creating user', error);
          });
      } else {
        console.error('Form is not valid');
      }
    },
    submitSignIn() {
      this.$router.push({path: '/login-page'});
    },
  },
};
</script>


<style>
.full-screen {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}
.gradient-background {
  background: linear-gradient(90deg, rgba(41,70,100,1) 0%, rgba(87,132,173,1) 100%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  display: grid;
  place-items: center;
  height: 50vh;
  color: #fff;
}

.custom-card {
  height: 80vh;
  width: 75%;
  display: grid;
  place-items: center;
}
.v-card-title {
  text-align: center;
  font-size: 32px;
}
.welcome-back {
  font-size: 3em;
  text-align: center;
  color: white;
}

.v-card-text {
  width: 80%;
}
</style>