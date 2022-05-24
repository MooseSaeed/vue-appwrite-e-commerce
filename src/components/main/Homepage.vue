<template>
  <Header />

  <Navbar />

  <!-- SECTION-CONTENT -->
  <section class="py-10">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">New products</h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <Productcard />
      </div>
      <!-- grid .// -->
    </div>
  </section>
  <!--  SECTION-CONTENT  //END -->

  <Footer />
</template>

<script>
import Header from "../Header.vue";
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import Productcard from "../Productcard.vue";
export default {
  components: {
    Header,
    Navbar,
    Footer,
    Productcard,
  },
};
</script>

<style></style>
