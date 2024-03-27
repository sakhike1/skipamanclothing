<template>
  <!-- component -->
  <div class="flex h-screen w-full items-center justify-center">
    <video autoplay muted loop class="video-bg"></video>

    <div
      class="flex flex-col w-[100rem] max-w-md px-4 py-8 bg-[#f2f2f798] rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10"
    >
      <div
        class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white"
      >
        Login To Your Account
      </div>
      <div class="mt-8">
        <form class="login" @submit.prevent="login">
          <div class="flex flex-col mb-2">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm"
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
                  ></path>
                </svg>
              </span>
              <input
                v-model="email"
                type="text"
                id="sign-in-email"
                class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative">
              <span
                class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm"
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
                  ></path>
                </svg>
              </span>
              <input
                v-model="password"
                type="password"
                id="sign-in-email"
                class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your password"
              />
            </div>
          </div>
          <div class="flex items-center mb-6 -mt-4">
            <div class="flex ml-auto">
              <a
                href="#"
                class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>
          <div class="flex w-full">
            <router-link>
              <button
                type="submit"
                class="glow-on-hover py-2 px-4 bg-[#f2f2f798] hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Login
              </button>
            </router-link>
          </div>
        </form>
      </div>
      <div class="flex items-center justify-center mt-6">
        <router-link to="ClientLogin">
          <button
            target="_blank"
            class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
          >
            <span class="ml-2"> You don&#x27;t have an account? </span>
          </button>
        </router-link>
      </div>
    </div>

    <MyVideo />
  </div>
</template>

<script>
import MyVideo from "@/components/MyVideo.vue";

export default {
  components: {
    MyVideo,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/AllTshirt"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.glow-on-hover {
  border: none;
  outline: none;
  color: #fff;
  background: #8f8383;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
