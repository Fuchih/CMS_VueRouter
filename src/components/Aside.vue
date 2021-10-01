<template>
  <div class="aside">
    <div class="nav flex-column">
      <router-link to="/home/users">Books</router-link>
      <router-link to="/home/authority">Authority</router-link>
      <router-link to="/home/items">Items</router-link>
      <router-link to="/home/order">Oreder</router-link>
      <router-link to="/home/setup">Setup</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style lang="scss" scoped>
a {
  padding: 10px;
  &:hover {
    background-color: #ccc;
  }
}
</style>
