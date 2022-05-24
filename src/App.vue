<template>
  <div>
    <Header />
    <Navbar />
    <Homepage />
    <Footer />
  </div>
</template>

<script>
import Homepage from "./components/main/Homepage.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Footer,
    Homepage,
  },
};
</script>

<style></style>
