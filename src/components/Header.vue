<template>
  <header class="bg-white py-3">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="flex flex-wrap items-center">
        <!-- Brand -->
        <div class="flex-shrink-0 mr-5">
          <a href="#">
            <img src="/images/logo.svg" height="38" alt="Brand" />
          </a>
        </div>
        <!-- Brand .//end -->

        <!-- Search -->
        <div
          class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4"
        >
          <input
            class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
            type="text"
            placeholder="Search"
          />
          <button
            type="button"
            class="px-4 py-2 inline-block text-blue-600 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md hover:bg-blue-100"
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
        <!-- Search .//end -->

        <!-- Actions -->
        <div class="flex items-center space-x-2 ml-auto">
          <a
            class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            href="#"
          >
            <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
            <span class="hidden lg:inline ml-1">My cart</span>
          </a>
        </div>
        <!-- Actions .//end -->

        <!-- mobile-only -->
        <div class="lg:hidden ml-2">
          <button
            type="button"
            class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
          >
            <span class="sr-only">Open menu</span>
            <i class="fa fa-bars fa-lg"></i>
          </button>
        </div>
        <!-- mobile-only //end  -->
      </div>
      <!-- flex grid //end -->
    </div>
    <!-- container //end -->
  </header>
</template>

<script>
export default {};
</script>

<style></style>
