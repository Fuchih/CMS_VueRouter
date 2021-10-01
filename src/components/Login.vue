<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <div class="form">
        <input type="text" placeholder="admin" required v-model="username" />
        <label>
          <span style="transition-delay: 0ms">E</span>
          <span style="transition-delay: 50ms">m</span>
          <span style="transition-delay: 100ms">a</span>
          <span style="transition-delay: 150ms">i</span>
          <span style="transition-delay: 200ms">l</span>
        </label>
      </div>
      <div class="form">
        <input type="password" placeholder="123" required v-model="password" />
        <label>
          <span style="transition-delay: 0ms">P</span>
          <span style="transition-delay: 50ms">a</span>
          <span style="transition-delay: 100ms">s</span>
          <span style="transition-delay: 150ms">s</span>
          <span style="transition-delay: 200ms">w</span>
          <span style="transition-delay: 250ms">o</span>
          <span style="transition-delay: 300ms">r</span>
          <span style="transition-delay: 350ms">d</span>
        </label>
      </div>
      <button @click="login">Login</button>
      <button @click="reset">Reset</button>
      <p>
        Don't have an account?
        <a href="#">Register</a>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username == 'admin' && this.password == '123') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
        this.$router.push('/login')
        alert('Wrong!!')
      }
    },
    reset() {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.container {
  width: 380px;
  height: 500px;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #4682b4;
  color: #fff;
  text-align: center;
}

h1 {
  margin: 0;
  padding: 50px 0 0 0;
  text-align: center;
}

.form {
  position: relative;
  text-align: center;
}

input {
  width: 80%;
  margin-top: 25px;
  padding: 10px 0;
  border: 0;
  border-bottom: 3px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 24px;
}

label {
  position: absolute;
  top: 40px;
  left: 10%;
}

span {
  display: inline-block;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form input:focus + label span,
.form input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}

button {
  width: 80%;
  height: 50px;
  margin-top: 25px;
  border: 0;
  border-radius: 8px;
  color: #4682b4;
  font-size: 20px;
}

button:active {
  transform: scale(0.97);
}

p {
  margin-top: 50px;
}

a {
  padding: 20px;
  text-decoration: none;
  color: #add8e6;
}

a:hover {
  color: coral;
}
</style>
