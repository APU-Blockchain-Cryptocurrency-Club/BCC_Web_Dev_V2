<template>
    <div class="bg-slate-600">
        <footer class="footer bg-slate-600 p-4 max-sm:p-8 sm:p-8 xl:container xl:mx-auto">
            <aside>
                <div>
                    <NuxtLink to="/">
                        <img
                            src="../assets/APUBCC Logo.png"
                            alt="APU BCC Logo"
                            class="w-40 md:w-48" />
                    </NuxtLink>
                </div>

                <div class="flex m-2">
                    <a
                        href="https://www.facebook.com/apubcc"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b rounded-full">
                        <img
                            src="../assets/white fb.png"
                            alt="APUBCC Facebook"
                            class="m-1 w-6 md:w-8" />
                    </a>

                    <a
                        href="https://twitter.com/apubcc"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b b rounded-full">
                        <img
                            src="../assets/white twitter.png"
                            alt="APUBCC Twitter"
                            class="m-1 w-6 md:w-8" />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b b rounded-full">
                        <img
                            src="../assets/white linked.png"
                            alt="APUBCC LinkedIn"
                            class="m-1 w-6 md:w-8" />
                    </a>

                    <a
                        href="https://www.instagram.com/apubcc"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b b rounded-full">
                        <img
                            src="../assets/white ig.png"
                            alt="APUBCC Instagram"
                            class="m-1 w-6 md:w-8" />
                    </a>

                    <a
                        href="https://www.youtube.com/@apubcc"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b b rounded-full">
                        <img
                            src="../assets/white you.png"
                            alt="APUBCC Youtube"
                            class="m-1 w-6 md:w-8" />
                    </a>

                    <a
                        href="https://github.com/APU-Blockchain-Cryptocurrency-Club"
                        target="_blank"
                        class="hover:bg-black transition delay-600 b b rounded-full">
                        <img
                            src="../assets/white gh.png"
                            alt="APUBCC GitHub"
                            class="m-1 w-6 md:w-8" />
                    </a>
                </div>
                <div class="text-xs pl-3 text-white">
                    <p>@APUBCC 2023</p>
                </div>
            </aside>

            <nav class="max-sm:pl-2">
                <header class="font-bold text-base text-orange-400">General</header>
                <a class="link link-hover text-white"> About Us</a>
                <a class="link link-hover text-white">Our Team</a>
                <nuxt-link to="/faq">
                    <a class="link link-hover text-white">FAQ</a>
                </nuxt-link>
            </nav>
            <nav class="max-sm:pl-2">
                <header class="font-bold text-base text-orange-400">Event</header>
                <nuxt-link to="/events">
                    <a class="link link-hover text-white">Events</a>
                </nuxt-link>
            </nav>
            <nav class="max-sm:pl-2">
                <header class="font-bold text-base text-orange-400">Resources</header>
                <a class="link link-hover text-white">Blog</a>
                <a
                    href="https://drive.google.com/drive/folders/14jBWb8b8P_woq8m7VnlT8yZ-1FQnNXOt"
                    class="link link-hover text-white"
                    >Media Kit</a
                >
            </nav>
            <nav class="max-sm:pl-2">
                <header class="font-bold text-base text-orange-400">Support Us</header>
                <a class="link link-hover text-white">Buy Us a coffee</a>
                <a class="link link-hover text-white">Crypto Addresses</a>
            </nav>
        </footer>
    </div>
</template>
