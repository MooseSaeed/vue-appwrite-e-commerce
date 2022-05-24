<template>
  <header class="bg-white py-3">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="flex flex-wrap items-center">
        <!-- Brand -->
        <div class="flex-shrink-0 mr-5">
          <a href="#">
            <img src="images/logo.svg" height="38" alt="Brand" />
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
            <i class="text-gray-400 w-5 fa fa-user"></i>
            <span class="hidden lg:inline ml-1">Sign in</span>
          </a>

          <a
            class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            href="#"
          >
            <i class="text-gray-400 w-5 fa fa-heart"></i>
            <span class="hidden lg:inline ml-1">Wishlist</span>
          </a>

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
  <nav class="border-b bg-blue-600 text-white">
    <div class="container max-w-screen-xl mx-auto px-4">
      <!-- menu -->
      <nav class="hidden lg:flex flex-1 items-center py-1">
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
          Category
        </a>
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#"> About </a>
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
          Services
        </a>
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#">
          Projects
        </a>
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#"> Offers </a>
        <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#"> Others </a>
      </nav>
      <!-- menu //end -->
    </div>
    <!-- container //end -->
  </nav>
  <!--  COMPONENT: HEADER //END -->

  <!-- SECTION-CONTENT -->
  <section class="py-10">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8">New products</h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/10.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
              <span
                class="inline-block px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full absolute left-3 top-3"
              >
                Offer
              </span>
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product title here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$99.50</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/11.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/12.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/13.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/14.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/12.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/9.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
        <div>
          <!-- COMPONENT: PRODUCT CARD -->
          <article class="shadow-sm rounded bg-white border border-gray-200">
            <a href="#" class="relative block p-1">
              <img
                src="images/items/8.jpg"
                class="mx-auto w-auto"
                style="height: 250px"
                height="250"
                alt="Product title here"
              />
            </a>
            <div class="p-4 border-t border-t-gray-200">
              <a
                class="float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
              <h6>
                <a href="#" class="text-gray-600 hover:text-blue-500"
                  >Product name goes here</a
                >
              </h6>
              <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
              <span class="font-semibold">$76.00</span>
            </div>
          </article>
          <!-- COMPONENT: PRODUCT CARD //END -->
        </div>
      </div>
      <!-- grid .// -->
    </div>
  </section>
  <!--  SECTION-CONTENT  //END -->

  <footer class="bg-blue-600">
    <!-- section footer top -->

    <!-- section footer bottom  -->
    <section class="bg-blue-700 py-6 text-white">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="lg:flex justify-between">
          <div class="mb-3">
            <img
              src="images/misc/payments.png"
              height="24"
              class="h-6"
              alt="Payment methods"
            />
          </div>
          <!-- col .// -->
          <div class="space-x-6">
            <nav class="text-sm space-x-4">
              <a href="#" class="opacity-70 hover:opacity-100"> Support </a>
              <a href="#" class="opacity-70 hover:opacity-100">
                Privacy &amp; Cookies
              </a>
              <a href="#" class="opacity-70 hover:opacity-100">
                Accessibility
              </a>
            </nav>
          </div>
          <!-- col .// -->
        </div>
        <!-- grid .// -->
      </div>
      <!-- container .// -->
    </section>
    <!-- section footer bottom  end -->
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
