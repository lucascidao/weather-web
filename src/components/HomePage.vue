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
          class="border w-full bg-gray-100"
        />
      </div>
      <div class="w-1/6 flex-items-center">
        <input class="w-10 h-10 border mr-4" type="button" value="test" />
        <input class="w-10 h-10 border" type="button" value="test1" />
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
