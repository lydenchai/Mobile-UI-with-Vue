<template>
  <div id="app">
    <header>
      <nav>
        <h1>Testing App</h1>
        <div class="links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <div class="profile">
            <img src="./assets/my-profile.jpg" width="100" height="100" alt="" />
          </div>
        </div>
      </nav>
    </header>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() { },
};
</script>
<style scoped>
nav {
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 60px;
  margin: 0;
  display: flex;
  align-items: center;
  background: #24252a;
}

nav .links {
  position: absolute;
  right: 0;
  display: flex;
}

a {
  width: 100px;
  height: 35px;
  color: #fff;
  display: grid;
  cursor: pointer;
  font-size: 15px;
  place-items: center;
  border-radius: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: #0186a7;
}

nav a.router-link-exact-active:hover {
  background-color: #005a70;
}

h1 {
  margin-left: 15px;
  color: #fff;
}

img {
  margin-right: 20px;
  margin-left: 10px;
  margin-top: -3px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
}
</style>
