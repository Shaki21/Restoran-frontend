<template>
     <v-app dark>
    <v-main>
      <v-container fluid fill-height>
        <v-row class="v-row-lp">
          <v-col cols="12" sm="8" md="4">
            <v-card elevation="5" class="custom-card-lp">
              <v-card-title class="v-card-title-lp">Šaki nas veže i spaja</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    label="Username"
                    prepend-icon="mdi-account"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  ></v-text-field>
                  <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
                  <v-btn type="submit" color="blue" block class="mt-4">
                    Login
                  </v-btn>
                </v-form>
                <div class="text-center mt-3">
                  <small>Don't have account? <a href="#" class="register-lp">Register</a></small>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
    };
  },
  mounted() {
    // Check if user info is stored in localStorage
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.username = savedUsername;
      this.rememberMe = true;
    }
  },
  methods: {
    login() {
      const credentials = {
        username: this.username,
        password: this.password,
      };

      axios.post('http://localhost:8080/api/login-page', credentials)
        .then(response => {
          if (response.data.success) {
            if (this.rememberMe) {
              localStorage.setItem('username', this.username);
            } else {
              localStorage.removeItem('username');
            }

            // Redirect to welcome page
            this.$router.push({
              path: '/welcome',
              query: { username: this.username },
            });
          } else {
            alert('Invalid username or password');
          }
        })
        .catch(error => {
          console.error('Login error:', error);
          alert('Login failed');
        });
    },
  },
};
</script>


<style scoped>
.v-row-lp {
  display: grid;
  place-items: center;
}
.v-card-title-lp {
  font-size: 2em;
  text-align: center;
  justify-content: center;
  font-family: 'Georgia', serif;
}
.v-container {
  background-image: linear-gradient(90deg, rgba(41,70,100,1) 0%, rgba(87,132,173,1) 100%);
  min-height: 100vh;
}
.custom-card-lp {
  margin-top: 20vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-family: 'Georgia', serif;
  color: white;
  display: grid;
  place-items: center;
}
.register-lp{
  color: #2196F3;
}
</style>