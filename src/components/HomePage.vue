<template>
  <div class="">
    <div id="header" class="flex w-full h-30 border-b-2 py-2">
      <div class="w-1/6 h-auto">
        <span class="font-bold text-base">December 2023 <br /></span>
        <span class="text-gray-500 text-sm">Friday,December 7,2023</span>
      </div>
      <div class="w-4/6 flex items-center">
        <input
          type="search"
          name="search"
          id="pesquisa"
          placeholder="Search Location"
          class="w-full h-8 bg-gray-100 p-2"
        />
      </div>
      <div class="ml-10 w-1/6 flex items-center">
        <button
          class="bg-gray-100 w-10 h-8 hover:bg-gray-200 hover:border-gray-300"
        >
          <font-awesome-icon icon="fa-solid fa-user" />
        </button>
        <button
          class="ml-4 bg-gray-100 w-10 h-8 hover:bg-gray-200 hover:border-gray-300"
        >
          <font-awesome-icon icon="fa-solid fa-gear" />
        </button>
      </div>
    </div>
    <div class="container">
      <div class="m-5 text-start font-bold">Today Overview</div>
      <div class="mx-5 grid grid-cols-2 gap-10">
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-wind" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Wind Speed</div>
              <div><div class="font-bold text-3xl">15 KM/h</div></div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8599; 4km/h</div>
            </div>
          </div>
        </div>
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-cloud-rainlula" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Rain Chance</div>
              <div><div class="font-bold text-3xl">20%</div></div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8599; 10%</div>
            </div>
          </div>
        </div>
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-water" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Pressure</div>
              <div><div class="font-bold text-3xl">730 hpa</div></div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8601; 21 hpa</div>
            </div>
          </div>
        </div>
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-sun" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Uv Index</div>
              <div><div class="font-bold text-3xl">2,6</div></div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8601; 0,2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
