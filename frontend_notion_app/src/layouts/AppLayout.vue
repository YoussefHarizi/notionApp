<template>
  <component class="max-w-screen-xl font-sans mx-auto" :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "DefaultLayout";
export default {
  computed: {
    layout() {
      let layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style>
</style>