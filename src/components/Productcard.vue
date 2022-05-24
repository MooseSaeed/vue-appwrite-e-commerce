<template>
  <div>
    <!-- COMPONENT: PRODUCT CARD -->
    <article class="shadow-sm rounded bg-white border border-gray-200">
      <a href="/products/example" class="relative block p-1">
        <img
          src="/images/items/10.jpg"
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
          <a href="/products/example" class="text-gray-600 hover:text-blue-500"
            >Product title here</a
          >
        </h6>
        <p class="text-sm text-gray-400">Sizes: S, M, XL</p>
        <span class="font-semibold">$99.50</span>
      </div>
    </article>
    <!-- COMPONENT: PRODUCT CARD //END -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
