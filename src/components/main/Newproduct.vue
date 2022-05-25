<template>
  <section class="container max-w-3xl p-6 mx-auto">
    <article
      class="bg-white rounded shadow-sm border border-gray-200 p-4 lg:p-6 my-5"
    >
      <h2 class="mb-3 text-xl md:text-2xl font-semibold text-black">
        Create new item
      </h2>

      <form>
        <div class="mb-4">
          <label class="block mb-1"> Name of item </label>
          <input
            type="text"
            class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Type here"
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1"> Description </label>
          <textarea
            rows="4"
            class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Type here"
          ></textarea>
        </div>

        <div class="mb-4">
          <label class="block mb-1"> Image upload </label>
          <input type="file" class="w-72" placeholder="Type here" />
        </div>

        <div class="mb-4">
          <label class="block mb-1"> Tags input </label>
          <input
            type="text"
            class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Tag, Tag,..."
          />
        </div>

        <div class="grid md:grid-cols-2 gap-x-2">
          <div class="mb-4">
            <label class="block mb-1"> Category </label>
            <div class="relative">
              <select
                class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              >
                <option>Uncategorized</option>
                <option>Automibiles</option>
                <option>Clothings</option>
                <option>Home items</option>
              </select>
              <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  class="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div class="mb-4">
            <label class="block mb-1"> Subcategory </label>
            <div class="relative">
              <select
                class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              >
                <option>Select directory</option>
                <option>Modern cars</option>
                <option>Electric cars</option>
                <option>Motorcycles</option>
              </select>
              <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  class="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <!-- grid -->

        <div class="mb-4">
          <label class="block mb-1"> Price </label>
          <div class="grid grid-cols-3 gap-x-2 md:w-1/2">
            <div class="col-span-2">
              <input
                type="text"
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="0.00"
              />
            </div>
            <div>
              <select
                class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="Select one option"
              >
                <option>USD</option>
                <option>EUR</option>
                <option>RUB</option>
                <option>UZS</option>
              </select>
            </div>
          </div>
          <!-- flex grid -->
        </div>

        <label class="flex items-center w-max my-4">
          <input checked name="" type="checkbox" class="h-4 w-4" />
          <span class="ml-2 inline-block text-gray-500">
            Publish item now
          </span>
        </label>

        <button
          type="submit"
          class="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Submit item
        </button>

        <a
          href="#"
          class="px-4 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        >
          Cancel
        </a>
      </form>
    </article>
  </section>
  <!-- container -->
</template>

<script>
export default {};
</script>

<style></style>
