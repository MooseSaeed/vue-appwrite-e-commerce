<template>
  <div>
    <div>
      <Login v-if="!pageSwitch">
        <div>
          <p>
            {{ pageSwitch ? "Got an account?" : "Haven't got an account?" }}
            <span
              class="cursor-pointer"
              @click="() => (this.pageSwitch = !this.pageSwitch)"
              >{{ pageSwitch ? "Login" : "Sign Up" }}</span
            >
          </p>
        </div>
      </Login>
      <Signup v-if="pageSwitch">
        <div>
          <p>
            {{ pageSwitch ? "Got an account?" : "Haven't got an account?" }}
            <span
              class="cursor-pointer"
              @click="() => (this.pageSwitch = !this.pageSwitch)"
              >{{ pageSwitch ? "Login" : "Sign Up" }}</span
            >
          </p>
        </div>
      </Signup>
    </div>
  </div>
</template>

<script>
import Login from "../Login.vue";
import Signup from "../Signup.vue";
export default {
  name: "Authpage",
  components: {
    Login,
    Signup,
  },
  data: () => {
    return {
      pageSwitch: false,
    };
  },
};
</script>
