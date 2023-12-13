<template>
  <div class="sidebar py-4 px-2 h-screen text-white">
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
      <div class="fa-2xl ml-5 col-span-1 w-10 mb-2">
        <font-awesome-icon icon="fa-solid fa-cloud-rain" />
      </div>
      <div class="col-span-1"></div>
      <span class="col-span-1 text-4xl">{{ temperature }}&deg;C</span>
      <span class="col-span-1 flex items-center ml-6">{{
        weather.weather[0].description
      }}</span>
    </div>
    <!-- Umity -->
    <div class="mb-10">
      <hr size="10" class="mb-5" />
      <h3 class="mb-2">Chance of rain</h3>
      <div class="grid grid-cols-1">
        <div class="grid grid-cols-3 mb-2">
          <span class="text-sm">10 AM</span>
          <div class="bg-slate-700 h-5 rounded-xl">
            <div class="w-2/6 bg-blue-600 rounded-xl h-5 z-10"></div>
          </div>
          <span class="text-sm">20%</span>
        </div>
        <div class="grid grid-cols-3 mb-2">
          <span class="text-sm">12 PM</span>
          <div class="bg-slate-700 h-5 rounded-xl">
            <div class="w-3/6 bg-blue-600 rounded-xl h-5 z-10"></div>
          </div>
          <span class="text-sm">40%</span>
        </div>
        <div class="grid grid-cols-3 mb-2">
          <span class="text-sm">14 PM</span>
          <div class="bg-slate-700 h-5 rounded-xl">
            <div class="w-4/6 bg-blue-600 rounded-xl h-5 z-10"></div>
          </div>
          <span class="text-sm">80%</span>
        </div>
        <div class="grid grid-cols-3 mb-2">
          <span class="text-sm">16 PM</span>
          <div class="bg-slate-700 h-5 rounded-xl">
            <div class="w-6/6 bg-blue-600 rounded-xl h-5 z-10"></div>
          </div>
          <span class="text-sm">100%</span>
        </div>
      </div>
    </div>
    <!-- Sunrise & Sunset-->
    <div
      class="border rounded h-20 mb-5 grid grid-cols-2 px-5 gap-8 hover:border-yellow-400"
    >
      <div class="flex items-start mt-4 flex-col">
        <div>Sunset</div>
        <div>{{ sunset }}</div>
      </div>
      <div class="flex items-center fa-2xl">
        <font-awesome-icon icon="fa-solid fa-cloud-sun" />
      </div>
    </div>
    <div
      class="border rounded h-20 mb-5 grid grid-cols-2 px-5 gap-8 hover:border-yellow-400"
    >
      <div class="flex items-start mt-4 flex-col">
        <div>Sunrise</div>
        <div>{{ sunrise }}</div>
      </div>
      <div class="flex items-center fa-2xl">
        <font-awesome-icon icon="fa-solid fa-sun" />
      </div>
    </div>
  </div>
</template>

<style>
.sidebar {
  background: linear-gradient(to bottom, #3f546f, #10235d);
}
</style>

<script>
// import axios from "axios";

export default {
  name: "SideBar",
  data() {
    return {
      weather: {
        weather: [
          {
            description: "---",
          },
        ],
        main: {
          temp: 0,
          pressure: 0,
          humidity: 0,
        },
        sys: {
          sunrise: 0,
          sunset: 0,
        },
      },
      temperature: 0,
      sunrise: 0,
      sunset: 0,
      currentHour: new Date().getHours(),
      currentMinute: new Date().getMinutes(),
      currentDay: new Date().getDay(),
    };
  },
  async mounted() {
    await this.getWeather();
  },
  methods: {
    getTemperature() {
      return Math.round(this.weather.main.temp - 273.15);
    },
    getSunsetSunrise() {
      let dateSet = new Date(this.weather.sys.sunset * 1000);
      let dateRise = new Date(this.weather.sys.sunrise * 1000);
      this.sunset = dateSet.getHours() + ":" + dateSet.getMinutes();
      this.sunrise = dateRise.getHours() + ":" + dateRise.getMinutes();
    },
    async getWeather() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=-22.523977269086362&lon=-43.998343432807246&appid={OPENWEATHERAPIKEY}"
      );
      const data = await response.json();
      this.weather = data;
      this.temperature = this.getTemperature();
      this.getSunsetSunrise();
    },
  },
};
</script>
