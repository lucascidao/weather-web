<template>
  <div class="flex h-screen">
    <div class="flex-1 overflow-x-hidden overflow-y-auto">
      <!-- <LayoutHeader /> -->
      <slot />
    </div>
    <div class="flex-shrink-0 w-64">
      <SideBar />
    </div>
  </div>
</template>

<script>
// import LayoutHeader from "./Header/LayoutHeader.vue";
import SideBar from "./SideBar/SideBar.vue";
export default {
  name: "AppLayout",
  components: {
    // LayoutHeader,
    SideBar,
  },
};
</script>
