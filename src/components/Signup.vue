<template>
  <main class="relative">
    <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center text-black sm:text-3xl">
          Sign up
        </h1>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
        <form
          @submit="processRegister"
          action=""
          class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl dark:bg-gray-700/50 backdrop-blur-md bg-none dark:text-white"
        >
          <p class="text-lg font-medium">Sign up new account</p>

          <div>
            <label for="nameOfUser" class="text-sm font-medium">Username</label>

            <div class="relative mt-1">
              <input
                v-model="username"
                type="text"
                id="username"
                required
                placeholder="Enter username"
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              />
            </div>
          </div>
          <div>
            <label for="nameOfUser" class="text-sm font-medium"
              >Your Name</label
            >

            <div class="relative mt-1">
              <input
                v-model="nameOfUser"
                type="text"
                id="nameOfUser"
                required
                placeholder="Enter your name"
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              />
            </div>
          </div>
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
          <div>
            <label for="confirmPassword" class="text-sm font-medium"
              >Confirm Password</label
            >

            <div class="relative mt-1">
              <input
                v-model="confirmPassword"
                type="password"
                id="confirmPassword"
                required
                placeholder="Confirm Password"
                class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              />
            </div>
          </div>

          <button
            class="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            type="submit"
          >
            Sign up
          </button>

          <slot />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Signup",
  data: () => {
    return {
      username: "",
      nameOfUser: "",
      email: "",
      password: "",
      confirmPassword: "",
      loading: "",
      error: false,
    };
  },
  methods: {
    async processRegister(e) {
      e.preventDefault();
      // Validation
      if (this.loading) {
        return;
      }
      // Password confirmation
      if (this.password !== this.confirmPassword) {
        this.error = "Error: Passwords must be matching.";
        return;
      }
      // Length Validation
      if (!(this.password.length >= 6 && this.password.length <= 32)) {
        this.error = "Error: Password must be between 6 and 32 characters.";
        return;
      }
      if (this.nameOfUser.length >= 100) {
        this.error = "Error: Name can not exceed 100 characters";
        return;
      }
      if (this.username.length >= 50) {
        this.error = "Error: username can not exceed 50 characters";
        return;
      }
      this.loading = true;

      //I need a username here to make dynamic users routes

      let username = this.username;
      username = username.replace(/\s+/g, "").toLowerCase();

      if (
        (await this.$parent.signup(
          username,
          this.nameOfUser,
          this.password,
          this.email
        )) === false
      ) {
        this.error =
          "Something went wrong while registering, Check console for more details.";
      } else {
        setTimeout(() => {
          this.$parent.updateUsername(username);
        }, 300);
      }
    },
  },
};
</script>

<style></style>
