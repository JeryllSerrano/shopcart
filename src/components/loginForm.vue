<template>
    <div>
      <h1>Serrano Silog Royale</h1>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        this.$router.push('/menu');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles for the login page here */
  </style>
  
  