<template>
  <div class="navbar z-50 pl-32">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              About
            </a>
            <ul class="p-2">
              <li>
                <a class="text-orange-400 hover:text-blue-500"> History </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500">
                  Vision & Mission
                </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Partners </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Our Team </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              Events
            </a>
          </li>
          <li>
            <a
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              Resources
            </a>
            <ul class="p-2">
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Blogpost </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Youtube </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Twitter </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Podcast </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <nuxt-link to="/">
        <div class="flex">
          <img
            class="w-14 h-14"
            src="../assets/Logo.png"
            alt="Logo"
            width="200"
          />
          <p class="font-Encode font-bold text-3xl text-white m-2">APUBCC</p>
        </div>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li tabindex="0">
          <details>
            <summary
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              About
            </summary>
            <ul class="p-2">
              <li>
                <a class="text-orange-400 hover:text-blue-500"> History </a>
              </li>
              <nuxt-link to="/visionmission">
                <li>
                  <a class="text-orange-400 hover:text-blue-500">
                    Vision & Mission
                  </a>
                </li>
              </nuxt-link>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Partners </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Our Team </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a
            class="font-Encode font-bold text-lg text-white hover:text-gray-300"
          >
            Events
          </a>
        </li>

        <li tabindex="0">
          <details>
            <summary
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              Resources
            </summary>
            <ul class="p-2">
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Blogpost </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Youtube </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Twitter </a>
              </li>
              <li>
                <a class="text-orange-400 hover:text-blue-500"> Podcast </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <nuxt-link to="/faq">
            <a
              class="font-Encode font-bold text-lg text-white hover:text-gray-300"
            >
              FAQ
            </a>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end pr-10">
      <button
        class="btn mr-20 px-10 rounded-full text-white text-sm font-extrabold bg-orange-500 hover:bg-orange-400 border-transparent"
      >
        Join Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script></script>
