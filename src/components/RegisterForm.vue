<template>
  <v-container fluid class="full-screen">
    <v-row no-gutters>
      <v-col cols="6" class="gradient-background"></v-col>
      <v-col cols="1" class="divider"></v-col>
      <v-col cols="5">
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

<style>
.full-screen {
  height: full;
  width: full;
  display: flex;
}

.gradient-background {
  background: linear-gradient(45deg, royalblue, lightblue);
  height: ;
}

.divider {
  background-color: white;
  width: 1px;
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