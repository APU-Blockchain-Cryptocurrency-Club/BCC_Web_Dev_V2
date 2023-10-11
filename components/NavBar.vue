<template>
    <div class="absolute z-10 flex bg-transparent p-3 justify-between w-5/6 left-1/2 -translate-x-1/2">
      <!-- <div class=""> -->
      <router-link to="/">
        <div class="flex">
          <img class="w-14 h-14" src="../assets/Logo.png" alt="Logo" width="200">
          <p class="font-Encode font-bold text-3xl text-white m-2"> APUBCC </p>
        </div>
      </router-link>
  
      <div class="m-3">
        <ul class="flex font-Encode font-extrabold text-lg text-white">
          <button class="px-5 flex" type="button" v-on:mouseenter="showAbt" v-on:mouseleave="hideAbt">
            ABOUT
            <span class="my-auto ml-2 h-5 w-5">
              <img src="..\assets\dp_arrow.png" alt="">
            </span>
          </button>
          <div v-if="displayAbt" v-on:mouseenter="showAbt" v-on:mouseleave="hideAbt">
            <ul class="absolute z-10 top-12 right-2 min-w-max list-none overflow-hidden rounded-lg bg-white text-center">
              <router-link to="/aboutus">
                <p class="block text-1x1 px-6 py-3 font-bold text-orange-400 hover:text-blue-500">History</p>
              </router-link>
              <router-link to="/visionmission">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Vision &<br>Mission</p>
              </router-link>
              <router-link to="/aboutus">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Partners</p>
              </router-link>
              <router-link to="/aboutus">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Our Team</p>
              </router-link>
            </ul>
          </div>
  
  
          <!-- End About Nav -->
          <li class="px-5">
              <nuxt-link to="/events">
                <p class="font-extrabold">EVENTS</p>
              </nuxt-link>
          </li>
          <!-- End Event Nav -->
          <button class="px-5 flex" type="button" v-on:mouseenter="showRes" v-on:mouseleave="hideRes">
            RESOURCES
            <span class="my-auto ml-2 h-5 w-5">
              <img src="..\assets\dp_arrow.png" alt="">
            </span>
          </button>
          <div v-if="displayRes" v-on:mouseenter="showRes" v-on:mouseleave="hideRes">
            <ul class="absolute z-10 top-12 right-7 min-w-max list-none overflow-hidden rounded-lg bg-white text-center">
              <router-link to="/blogpost">
                <p class="block text-1x1 px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Blogpost</p>
              </router-link>
              <router-link to="/youtube">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Youtube</p>
              </router-link>
              <router-link to="/twitter">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Twitter</p>
              </router-link>
              <router-link to="/podcast">
                <p class="block text-1xl px-6 py-3 font-bold text-orange-400 hover:text-blue-500">Podcast</p>
              </router-link>
            </ul>
          </div>
          <!-- End Resource Nav -->
  
          <li class="px-5">
            <nuxt-link to="/faq">
              <p class="font-extrabold">FAQ</p>
            </nuxt-link>
          </li>
          <button class="px-5 ml-5 rounded-full text-sm font-extrabold bg-orange-500 hover:bg-orange-400">JAIL NOW</button>
        </ul>
  
      </div>
  
      <!-- </div> -->
  
    </div>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        displayAbt: false,
        displayRes: false,
        abtTimeOut: null,
        resTimeOut: null
      };
    },
    methods: {
      showAbt() {
        clearTimeout(this.abtTimeOut);
        this.displayAbt = true;
      },
      hideAbt() {
        this.abtTimeOut = setTimeout(() => {
          this.displayAbt = false;
        }, 250);
      },
      showRes() {
        clearTimeout(this.resTimeOut);
        this.displayRes = true;
      },
      hideRes() {
        this.resTimeOut = setTimeout(() => {
          this.displayRes = false;
        }, 250);
      },
    }
  }
  </script>