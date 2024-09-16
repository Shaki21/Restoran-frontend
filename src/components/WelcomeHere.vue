<template>
    <div>
      <h1>Dobrodošli, {{ username }}!</h1>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      username() {
        return this.$route.query.username;
      },
    },
  };
  </script>