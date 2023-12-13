<template>
  <div class="">
    <div id="header" class="flex w-full h-30 border-b-2 py-2">
      <div class="w-1/6 h-auto">
        <span class="font-bold text-base">December 2023 <br /></span>
        <span class="text-gray-500 text-sm"
          >{{ currentMonth }}/{{ currentDay }}/{{ currentYear }}</span
        >
      </div>
      <div class="w-4/6 flex items-center">
        <input
          type="search"
          name="search"
          id="pesquisa"
          disabled
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
              <div>
                <div class="font-bold text-3xl">
                  {{ weather.wind.speed }} Km/h
                </div>
              </div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8599;</div>
            </div>
          </div>
        </div>
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-cloud-rain" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Humidity</div>
              <div>
                <div class="font-bold text-3xl">
                  {{ weather.main.humidity }} %
                </div>
              </div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8599;</div>
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
              <div>
                <div class="font-bold text-3xl">
                  {{ weather.main.pressure }} hpa
                </div>
              </div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8601;</div>
            </div>
          </div>
        </div>
        <div class="w-full h-36 bg-gray-100 p-5">
          <div class="grid grid-cols-4">
            <div class="fa-2xl self-center col-span-1">
              <font-awesome-icon icon="fa-solid fa-sun" />
            </div>
            <div class="flex-1 space-y-6 self-center col-span-2">
              <div class="">Feels Like</div>
              <div>
                <div class="font-bold text-3xl">
                  {{ Math.round(weather.main.feels_like - 273.15) }}
                </div>
              </div>
            </div>
            <div class="flex-1 mt-10 self-center col-span-1">
              <div class="font-semibold text-sm">&#8601;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  data() {
    return {
      weather: {
        wind: {
          speed: 0,
        },
        main: {
          humidity: 0,
          pressure: 0,
          feels_like: 0,
        },
      },
      currentDay: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=-22.523977269086362&lon=-43.998343432807246&appid=OPENWEATHERAPIKEY"
      )
      .then((response) => (this.weather = response.data));
  },
  async getWeather() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=-22.523977269086362&lon=-43.998343432807246&appid=OPENWEATHERAPIKEY"
    );
    const data = await response.json();
    this.weather = data;
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
