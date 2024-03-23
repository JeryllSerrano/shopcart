<template>
    <div>
      <h2>Go to Menu</h2>
      <ul>
        <li v-for="product in products" :key="product.id" class="product-item">
          {{ product.name }} - ₱{{ product.price }}
          <button @click="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Tapsilog', price: 95 },
          { id: 2, name: 'Tocilog', price: 85 },
          { id: 3, name: 'Daingsilog', price: 80 },
          { id: 4, name: 'Pork Tonkatsu Silog', price: 85 },
          { id: 5, name: 'Liempo Silog', price: 95 }
        ]
      }
    },
    methods: {
      addToCart(product) {
        // Assuming you have a cart array in your parent component, you can emit an event to add the product to the cart
        this.$emit('add-to-cart', product);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your scoped styles for the menu page here */
  </style>
  