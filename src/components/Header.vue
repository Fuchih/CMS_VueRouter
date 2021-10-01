<template>
  <div class="container">
    <h1 class="text-center">CMS</h1>
    <button class="btn btn-primary" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    box-shadow: none;

    &:active {
      box-shadow: none;
      transform: scale(0.95);
    }
  }
}
</style>
