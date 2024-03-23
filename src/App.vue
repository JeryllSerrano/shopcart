<template>
    <div id="app">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  /* Add your global styles here */
  body {
    background-color: #f4f4f4; /* Background color */
    font-family: Arial, sans-serif; /* Font family */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>
  