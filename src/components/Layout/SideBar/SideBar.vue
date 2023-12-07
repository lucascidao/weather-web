<template>
  <div class="sidebar py-4 px-5 h-screen text-white">
    <!-- Place -->
    <div class="grid grid-cols-2 mb-10">
      <div class="">
        <h2 class="font-bold">Pinheiral</h2>
        <h3 class="">RJ,Brasil</h3>
      </div>
      <div class="flex items-center ml-6">
        {{ currentHour }}:{{ currentMinute }}
      </div>
    </div>
    <!-- Weather -->
    <div class="grid grid-cols-2 mb-10">
      <span class="text-4xl">20&deg;C</span>
      <span class="flex items-center ml-6">Raining</span>
    </div>
    <!-- Umity -->
    <div class="mb-10">
      <hr size="10" class="mb-5" />
      <h3 class="mb-2">Chance of rain</h3>
      <div class="w-full bg-slate-700 h-5 rounded-xl">
        <div class="w-1/4 bg-blue-600 rounded-xl h-5 z-10"></div>
      </div>
      <br />
      <div class="bg-slate-700 h-5 rounded-xl">
        <div class="w-2/6 bg-blue-600 rounded-xl h-5 z-10"></div>
      </div>
      <br />
      <div class="bg-slate-700 h-5 rounded-xl">
        <div class="w-3/6 bg-blue-600 rounded-xl h-5 z-10"></div>
      </div>
      <br />
      <div class="bg-slate-700 h-5 rounded-xl">
        <div class="w-6/6 bg-blue-600 rounded-xl h-5 z-10"></div>
      </div>
      <br />
    </div>
    <!-- Sunrise & Sunset-->
    <div class="border rounded h-20 mb-5 grid grid-cols-2 px-5 gap-8">
      <div class="flex items-center">
        <input type="image" src="../../../assets/sunrise.png" alt="" />
      </div>
      <div class="flex items-center">{{ currentHour }}:{{ currentMinute }}</div>
    </div>
    <div class="border rounded h-20 mb-5 grid grid-cols-2 px-5 gap-8">
      <div class="flex items-center">Sunrise</div>
      <div class="flex items-center">{{ currentHour }}:{{ currentMinute }}</div>
    </div>
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
  data() {
    return {
      currentHour: new Date().getHours(),
      currentMinute: new Date().getMinutes(),
    };
  },
};
</script>
