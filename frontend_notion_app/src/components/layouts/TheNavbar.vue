<template>
  <div class="flex items-center justify-between h-20">
    <div>
      <logo />
    </div>

    <ul class="flex justify-between divide-x divide-green-500">
      <li class="mr-2 ">Contact sales</li>
      <li class="mr-2">Login</li>
      <li
        class="
          text-sm
          
          bg-blue-500
          text-white
          py-1
          px-4
          cursor-pointer
          rounded-lg
          hover:bg-blue-400
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-700
          focus-visible:ring-offset-2
          focus-visible:ring-offset-blue-900
        "
      >
        Try notion free
      </li>
    </ul>
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