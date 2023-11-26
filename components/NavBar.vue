<template>
    <div class="navbar z-50 p-8 xl:container xl:mx-auto">
        <!-- Mobile Dropdown Menu -->
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost xl:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a
                            class="font-Encode font-bold text-lg text-orange-500 hover:text-gray-300">
                            About
                        </a>
                        <ul class="p-2">
                            <li>
                                <a class="text-orange-400 hover:text-blue-500"> History </a>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/vision-mission"
                                    class="text-orange-400 hover:text-blue-500">
                                    Vision & Mission
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/partners"
                                    class="text-orange-400 hover:text-blue-500">
                                    Partners
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/team" class="text-orange-400 hover:text-blue-500">
                                    Our Team
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink
                            to="/events"
                            class="font-Encode font-bold text-lg text-orange-500 hover:text-gray-300">
                            Events
                        </NuxtLink>
                    </li>
                    <li>
                        <a
                            class="font-Encode font-bold text-lg text-orange-500 hover:text-gray-300">
                            Resources
                        </a>
                        <ul class="p-2">
                            <li>
                                <a class="text-orange-400 hover:text-blue-500"> Onboard </a>
                            </li>
                            <li>
                                <a class="text-orange-400 hover:text-blue-500"> Substack </a>
                            </li>
                            <li>
                                <a class="text-orange-400 hover:text-blue-500"> Alpha Access </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NuxtLink
                            to="/faq"
                            class="font-Encode font-bold text-lg text-orange-500 hover:text-gray-300">
                            FAQ
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" class="flex items-center">
                <img
                    class="w-8 h-8 md:w-14 md:h-14"
                    src="../assets/Logo.png"
                    alt="Logo"
                    width="200" />
                <p class="font-Encode font-bold text-xl md:text-3xl text-white m-2">APUBCC</p>
            </NuxtLink>
        </div>

        <!-- Non-mobile Dropdown Navbar -->
        <div class="navbar-center hidden xl:flex">
            <ul class="menu menu-horizontal px-1">
                <li tabindex="0">
                    <details>
                        <summary
                            class="font-Encode font-bold text-lg text-white hover:text-gray-300">
                            About
                        </summary>
                        <ul class="p-2">
                            <li>
                                <NuxtLink to="/history">
                                    <a class="text-orange-400 hover:text-blue-500"> History </a>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/vision-mission">
                                    <a class="text-orange-400 hover:text-blue-500">
                                        Vision & Mission
                                    </a>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/partners">
                                    <a class="text-orange-400 hover:text-blue-500"> Partners </a>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/team">
                                    <a class="text-orange-400 hover:text-blue-500"> Our Team </a>
                                </NuxtLink>
                            </li>
                        </ul>
                    </details>
                </li>

                <li>
                    <NuxtLink to="/events">
                        <a class="font-Encode font-bold text-lg text-white hover:text-gray-300">
                            Events
                        </a>
                    </NuxtLink>
                </li>

                <li tabindex="0">
                    <details>
                        <summary
                            class="font-Encode font-bold text-lg text-white hover:text-gray-300">
                            Resources
                        </summary>
                        <ul class="p-2">
                            <li>
                                <a
                                    href="https://onboard.dev/community/apubcc"
                                    target="_blank"
                                    class="text-orange-400 hover:text-blue-500">
                                    Onboard
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://apubcc.substack.com/"
                                    target="_blank"
                                    class="text-orange-400 hover:text-blue-500">
                                    Substack
                                </a>
                            </li>

                            <li>
                                <NuxtLink
                                    to="/alpha-access"
                                    class="text-orange-400 hover:text-blue-500">
                                    Alpha Access
                                </NuxtLink>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <NuxtLink to="/faq">
                        <a class="font-Encode font-bold text-lg text-white hover:text-gray-300">
                            FAQ
                        </a>
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- Join Now button -->
        <div class="navbar-end pr-10">
            <button
                class="hidden md:flex btn px-10 rounded-full text-white text-sm font-extrabold bg-orange-500 hover:bg-orange-400 border-transparent">
                Join Now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    };
</script>
