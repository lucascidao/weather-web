<template>
  <div class="sidebar py-4 px-5 h-screen text-white">
    <!-- Place -->
    <div class="grid grid-cols-2 mb-10">
      <div class="">
        <h2 class="font-bold">Pinheiral</h2>
        <h3 class="">RJ,Brasil</h3>
      </div>
      <div class="flex items-center ml-6">16:14</div>
    </div>
    <!-- Weather -->
    <div class="grid grid-cols-2 mb-10">
      <span class="text-5xl">20 C</span>
      <span class="flex items-center ml-6">Raining</span>
    </div>
    <!-- Umity -->
    <div class="mb-10">
      <hr size="10" class="mb-5" />
      <h3>Chance of rain</h3>
      <span>***************</span>
      <br />
      <span>***************</span>
      <br />
      <span>***************</span>
      <br />
      <span>***************</span>
      <br />
    </div>
    <!-- Sunrise & Sunset-->
    <div class="border rounded h-20 mb-5">Sunset</div>
    <div class="border rounded h-20">Sunrise</div>
  </div>
</template>

<style>
.sidebar {
  background: linear-gradient(to bottom, #3f546f, #10235d);
}
</style>

<script>
export default {
  name: "SideBar",
};
</script>
