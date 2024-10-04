<template>
  <v-container fluid class="full-screen-ad">
    <v-col cols="12" sm="6" class="gradient-background">
      <div class="title-ad">
        <v-text class="welcome-back-ad">Welcome back!</v-text>
        <v-text class="subtitle-ad">If you already have an account, please sign in from here!</v-text>
        <v-btn rounded="xl" @click="redirectToSignIn" color="blue">Sign In</v-btn>
      </div>
    </v-col>
    <v-card flat class="custom-card-ad">
      <v-card-title class="v-card-title-ad">Just a few more details</v-card-title>
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
          
          <v-row>
            <v-col cols="6">
              <v-btn class="reg-back-btn" flat rounded="0"  @click="goBack" block>back</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn flat rounded="0" @click="submitSignUp" color="blue" block>Submit</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.full-screen-ad {
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
.title-ad {
  display: grid;
  place-items: center;
  height: 50vh;
  color: #fff;
}
.custom-card-ad {
  height: 80vh;
  width: 50vw;
  display: grid;
  place-items: center;
}
.v-card-title-ad {
  font-size: 3.5em;
  font-family: 'Georgia', serif;
  margin-top: 60px;
  text-align: center;
}
.welcome-back-ad {
  font-family: 'Georgia', serif;
  font-size: 4em;
  text-align: center;
  color: white;
}
.subtitle-ad {
  font-family: 'Georgia', serif;
  font-size: 1.2em;
  text-align: center;
  color: white;
}
.reg-back-btn {
  background-color: white;
  border: 2px solid #2196F3;
  color: #2196F3 !important;
}
</style>

<script>
import axios from 'axios';

export default {
  computed: {
    username() {
      return this.$route.query.username;
    },
  },
  data() {
    return {
      valid: false,
      firstname: '',
      lastname: '',
      position: '',
      positions: ['Cleaner', 'Waiter', 'Chef', 'Manager'],
      rules: {
        required: value => !!value || 'Required.',
      },
    };
  },
  methods: {
    redirectToSignIn() {
      this.$router.push({ path: '/sign-in' });
    },
    goBack() {
      this.$router.go(-1);
    },
    submitSignUp() {
      if (this.valid) {
        const employeeData = {
          firstname: this.firstname,
          lastname: this.lastname,
          position: this.position,
        };

        // Provjerite postoji li Employee za dati username
        axios.get(`http://localhost:8080/api/employees/by-username/${this.username}`)
          .then(response => {
            if (response.data) {
              // Employee postoji, ažurirajte ga
              axios.put(`http://localhost:8080/api/employees/by-username/${this.username}`, employeeData)
                .then(updateResponse => {
                  console.log('Employee updated', updateResponse.data);
                  this.redirectToWelcome();
                })
                .catch(error => {
                  console.error('Error updating employee', error.response ? error.response.data : error.message);
                });
            } else {
              // Employee ne postoji, kreirajte ga
              axios.post(`http://localhost:8080/api/employees/by-username/${this.username}`, employeeData)
                .then(createResponse => {
                  console.log('Employee created', createResponse.data);
                  this.redirectToWelcome();
                })
                .catch(error => {
                  console.error('Error creating employee', error.response ? error.response.data : error.message);
                });
            }
          })
          .catch(error => {
            if (error.response && error.response.status === 404) {
              // Ako GET zahtjev vrati 404, kreirajte Employee
              axios.post(`http://localhost:8080/api/employees/by-username/${this.username}`, employeeData)
                .then(createResponse => {
                  console.log('Employee created', createResponse.data);
                  this.redirectToWelcome();
                })
                .catch(error => {
                  console.error('Error creating employee', error.response ? error.response.data : error.message);
                });
            } else {
              console.error('Error checking employee existence', error.response ? error.response.data : error.message);
            }
          });
      } else {
        console.error('Form is not valid');
      }
    },
    redirectToWelcome() {
      this.$router.push({
        path: '/welcome',
        query: {
          username: this.username
        },
      });
    },
  },
};
</script>

