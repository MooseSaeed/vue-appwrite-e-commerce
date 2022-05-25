<template>
  <main class="relative">
    <div class="px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center dark:text-white sm:text-3xl">
          Login
        </h1>
        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <form
          @submit="processLogin"
          action=""
          class="p-8 mt-6 mb-0 space-y-4 rounded-xl shadow-2xl dark:bg-gray-700/50 backdrop-blur-md bg-none dark:text-white"
        >
          <p class="text-lg font-medium">Login to your account</p>

          <div>
            <label for="email" class="text-sm font-medium">Email</label>

            <div class="relative mt-1">
              <input
                v-model="email"
                type="email"
                id="email"
                required
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label for="password" class="text-sm font-medium">Password</label>

            <div class="relative mt-1">
              <input
                v-model="password"
                type="password"
                id="password"
                required
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            class="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            type="submit"
          >
            Sign in
          </button>

          <slot />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
