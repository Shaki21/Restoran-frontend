<template>
  <v-app dark>
    <v-main>
      <v-container fluid fill-height>
        <v-row class="v-row-lp">
          <v-col cols="12" sm="8" md="4">
            <v-card elevation="5" class="custom-card-lpp">
              <v-card-title class="v-card-title-lpt">
                Login</v-card-title>
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
                  <v-btn type="submit" color="primary" block class="mt-4">
                    Login
                  </v-btn>
                </v-form>
                <div class="text-center mt-3">
                  <small>Don't have account? <a href="#">Register</a></small>
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
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    login() {
      // Your login logic here
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
    },
  },
};
</script>

<style scoped>
.v-row-lp {
  display: grid;
  place-items: center;
}
.v-card-title-lpt {
  font-size: 2em;
  text-align: center;
  justify-content: center;
  font-family: 'Georgia', serif;
}
.v-container {
  background-image: linear-gradient(to bottom, #673ab7, #9c27b0);
  min-height: 100vh;
}

.custom-card-lpp {
  margin-top: 20vh;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-family: 'Georgia', serif;
  color: white;
}
</style>