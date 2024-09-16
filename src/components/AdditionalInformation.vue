<template>
  <v-container fluid class="full-screen">
      <v-col cols="12" sm="6" class="gradient-background">
        <div class="title">
          <v-text class="welcome-back">Welcome back!</v-text>
          <v-text class="subtitle">If you already have account please Sign in from here!</v-text>
          <v-btn rounded="xl" @click="submitSignUp" color="blue" >Sign In</v-btn>
        </div>

      </v-col>
        <v-card flat class="custom-card">
          <v-card-title class="v-card-title">Just a few more details</v-card-title>
          <v-card-text>
            <v-form ref="signupForm" class="form" v-model="valid">
              <v-text-field
                v-model="firstname"
                label="First Name"
                :rules="[rules.required]"
                required
                rounded="0"
                prepend-inner-icon="mdi-account"
              ></v-text-field>

              <v-text-field
                v-model="lastname"
                label="Last Name"
                :rules="[rules.required]"
                required
                rounded="0"
                prepend-inner-icon="mdi-account"
              ></v-text-field>

              <v-select
                v-model="position"
                :items="positions"
                label="Position"
                :rules="[rules.required]"
                required
                rounded="0"
                prepend-inner-icon="mdi-human-male"
              ></v-select>

              <v-btn flat rounded="0" @click="submitSignUp" color="blue" block>Sign Up</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
  </v-container>
</template>

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
  height: 60vh;
  width: 50vw;
  display: grid;
  place-items: center;
}
.v-card-title {
  font-size: 4em;
  font-family: 'Georgia', serif;
  margin-top: 60px;
  text-align: center;
}
.welcome-back {
  font-family: 'Georgia', serif;
  font-size: 4em;
  text-align: center;
  color: white;
}

.subtitle {
  font-family: 'Georgia', serif;
  font-size: 1.2em;
  text-align: center;

  color: white;

}

.v-card-text {
  width: 80%;
}

</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      position: '',
      positions: ['Cleaner', 'Waiter', 'Chef', 'Manager'],
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 5 || 'Min 5 characters',
      },
    };
  },
  methods: {
    submitSignUp() {
      if(this.valid) {
        const user = {
          username: this.username, 
          password: this.password,
          additionalInfo: {
            firstname: this.firstname,
            lastname: this.lastname,
            position: this.position,
          },
        };
        axios.post('http://localhost:8080/api/users', user)
          .then(response => {
            console.log('User created', response.data);
            // Redirect to home page
            this.$router.push({
              path: '/welcome',
              query: {
                username: this.username,
                firstname: this.firstname,
                lastname: this.lastname,
                position: this.position,
              },
            });
          })
          .catch(error => {
            console.error('Error creating user', error);
          });
      } else {
        console.error('Form is not valid');
      }
    },
  },
};
</script>