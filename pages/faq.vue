<template>
    <div class="pb-16">
  
      <div class="bg-transparent p-3 justify-between w-4/5 m-auto space-y-10 ">
        <p class="font-Encode font-bold text-[5rem] text-amber-600 mt-[5rem]"> FAQ </p>
        <p class="font-Encode font-bold text-5xl text-white"> How can we help you? </p>
      </div>
  
      <!--Search Bar-->
  
      <!-- <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative flex w-[70rem] ml-[180px] bg-transparent mt-[1rem]">
          <div class="absolute inset-y-2 flex items-center pl-[1rem] pointer-events-none ">
            <span class="material-symbols-outlined text-4xl mr-4">
              search
            </span>
          </div>
          <input type="search" id="default-search"
            class="placeholder:font-extrabold placeholder: text-xl pl-[4rem] appearance-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700/70 dark:border-gray-600 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search FAQ" required>
        </div>
      </form> -->
  
      <!--Dropdowns-->
      <div class="bg-transparent ml-[9.5rem] p-3 m-auto mt-[0.5rem]">
        <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(1)"
          :aria-expanded="isInfoDropdown1.toString()">
          What is the APU Blockchain & Cryptocurrency Club (APUBCC)?
          <span id="span1" class="ml-[22rem] h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z"></path></svg>
          </span>
        </button>
        <div>
          <ul v-if="isInfoDropdown1" data-te-dropdown-ref class="">
            <li>
              <a data-te-dropdown-item-ref>
                <div class="block py-2 px-5 ml-3 mt-3 text-lg text-amber-50 text-opacity-70 font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-lg">
                  The APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency.
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="bg-transparent ml-[9.5rem] p-3 m-auto mt-[0.5rem]">
        <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(2)"
          :aria-expanded="isInfoDropdown2.toString()">
          What activities does the APUBCC conduct?
          <span id="span2" class="ml-[36rem] h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z"></path></svg>
          </span>
        </button>
        <div>
          <ul v-if="isInfoDropdown2" data-te-dropdown-ref class="">
            <li>
              <a data-te-dropdown-item-ref>
                <div class="block py-2 px-5 ml-3 mt-3 text-lg text-amber-50 text-opacity-70 font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-lg">
                  APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more.
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="bg-transparent ml-[9.5rem] p-3 m-auto mt-[0.5rem]">
        <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(3)"
          :aria-expanded="isInfoDropdown3.toString()">
          What are the benefits of joining the APUBCC?
          <span id="span3" class="ml-[34rem] h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z"></path></svg>
          </span>
        </button>
        <div>
          <ul v-if="isInfoDropdown3" data-te-dropdown-ref class="">
            <li>
              <a data-te-dropdown-item-ref>
                <div class="block py-2 px-5 ml-3 mt-3 text-lg text-amber-50 text-opacity-70 font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-lg">
                  By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain.
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div class="bg-transparent ml-[9.5rem] p-3 m-auto mt-[0.5rem]">
        <button class="px-5 flex font-Encode font-bold text-2xl text-white" type="button" @click="toggleInfoDropDown(4)"
          :aria-expanded="isInfoDropdown4.toString()">
          How can I stay updated with the APUBCC's activities?
          <span id="span4" class="ml-[28.27rem] h-5 w-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z"></path></svg>
          </span>
        </button>
        <div>
          <ul v-if="isInfoDropdown4" data-te-dropdown-ref class="">
            <li>
              <a data-te-dropdown-item-ref>
                <div class="block py-2 px-5 ml-3 mt-3 text-lg text-amber-50 text-opacity-70 font-extrabold dark:bg-gray-700/40 w-[70rem] rounded-lg">
                  You can stay updated with APUBCC's activities by following their Instagram account. They might also have updates and information on their Facebook page, but you might need to log in to access the details.
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  
  const plusSymbol = '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.713-.288T11 18v-5Z"></path></svg>';
  const minusSymbol = '<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 13q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h12q.425 0 .713.288T19 12q0 .425-.288.713T18 13H6Z"></path></svg>';
  
  
  export default {
    name: "FAQ",
    data() {
      return {
        isInfoDropdown1: false,
        isInfoDropdown2: false,
        isInfoDropdown3: false,
        isInfoDropdown4: false,
      };
    },
    methods: {
      toggleInfoDropDown(span) {
        if (span == 1) {
          //Setting plus and minus symbol
          if (this.isInfoDropdown1 == false) {
            document.getElementById('span' + span).innerHTML = minusSymbol;
          }
          else {
            document.getElementById('span' + span).innerHTML = plusSymbol;
          }
          this.isInfoDropdown1 = !this.isInfoDropdown1;
  
        }
        else if (span == 2) {
  
          //Setting plus and minus symbol
          if (this.isInfoDropdown2 == false) {
            document.getElementById('span' + span).innerHTML = minusSymbol;
          }
          else {
            document.getElementById('span' + span).innerHTML = plusSymbol;
          }
          this.isInfoDropdown2 = !this.isInfoDropdown2;
        }
        else if (span == 3) {
  
          //Setting plus and minus symbol
          if (this.isInfoDropdown3 == false) {
            document.getElementById('span' + span).innerHTML = minusSymbol;
          }
          else {
            document.getElementById('span' + span).innerHTML = plusSymbol;
          }
          this.isInfoDropdown3 = !this.isInfoDropdown3;
        }
        else if (span == 4) {
  
          //Setting plus and minus symbol
          if (this.isInfoDropdown4 == false) {
            document.getElementById('span' + span).innerHTML = minusSymbol;
          }
          else {
            document.getElementById('span' + span).innerHTML = plusSymbol;
          }
          this.isInfoDropdown4 = !this.isInfoDropdown4;
        }
        else {
          window.alert("ERROR");
        }
  
      },
    }
  }
  </script>
  