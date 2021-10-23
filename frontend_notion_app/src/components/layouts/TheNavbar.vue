<template>
  <div class="flex items-center justify-between h-20 text-sm font-medium">
    <div>
      <logo />
    </div>

    <div class="flex items-center ">
    <div class="divide-x divide-gray-200">
        <router-link to='/' class="mr-2 p-2 hover:bg-gray-200 rounded">Contact sales</router-link>
        <router-link to='/' class="ml-2 p-2 hover:bg-gray-200 rounded">Log in</router-link>
    </div>
      <router-link to='/'
        class="
          bg-blue-500
          text-white
          py-1
          px-4
         ml-2
          rounded-lg
          hover:bg-blue-400
          focus:outline-none
          
        "
        >Try notion free</router-link
      >
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: { Logo },
};
</script>

<style>
</style>