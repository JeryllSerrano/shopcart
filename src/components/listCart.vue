<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index" class="cart-item">
        {{ item.product.name }} - ₱{{ item.product.price }} - Quantity: {{ item.quantity }}
        <button @click="updateQuantity(item, 'decrease')">-</button>
        <button @click="updateQuantity(item, 'increase')">+</button>
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <hr>
    <p>Total: ₱{{ getTotalPrice() }}</p>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  methods: {
    updateQuantity(item, action) {
      if (action === 'decrease') {
        if (item.quantity > 1) {
          item.quantity--;
        }
      } else if (action === 'increase') {
        item.quantity++;
      }
    },
    removeFromCart(index) {
      this.$emit('remove', index); // Emit event to parent component
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
  }
}
</script>

<style scoped>
/* Add your scoped styles for the cart page here */
.cart-item {
  background-color: #f9f9f9; /* Background color for items */
  border-radius: 5px; /* Rounded corners */
  padding: 10px;
  margin-bottom: 15px;
  position: relative;
}

.cart-item button {
  cursor: pointer; /* Show pointer cursor on buttons */
}

.cart-item:hover {
  transform: scale(1.03); /* Scale effect on hover */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Box shadow on hover */
}

.cart-item {
  perspective: 1000px; /* Perspective for 3D effect */
}

.cart-item:hover {
  transform: rotateY(10deg); /* 3D rotation on hover */
}

button {
  background-color: #4CAF50; /* Green button */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for background color */
}

button:hover {
  background-color: #45a049; /* Darker green on hover */
}
</style>
