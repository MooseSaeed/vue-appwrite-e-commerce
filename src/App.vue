<template>
  <div>
    <Header />
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer,
  },
};
</script>

<style></style>
