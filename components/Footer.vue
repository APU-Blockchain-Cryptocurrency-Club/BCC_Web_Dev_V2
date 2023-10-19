<template>
    <footer class="footer p-10 bg-slate-600 text-base-content pl-32">
        <aside>
            <div>
                <nuxt-link to="/">
                    <img src="../assets/APUBCC Logo.png" alt="APU BCC Logo" width="200">
                </nuxt-link>
            </div>

            <div class="flex m-2">

                <a href="https://www.facebook.com/apubcc" target="_blank" class="hover:bg-black transition delay-600 b rounded-full">
                    <img src="../assets/white fb.png" alt="APUBCC Facebook" width="35" class="m-1">
                </a>

                <a href="https://twitter.com/apubcc" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                    <img src="../assets/white twitter.png" alt="APUBCC Twitter" width="35" class="m-1">
                </a>

                <a href="https://www.linkedin.com/company/apu-blockchain-crypto-club-apu-bcc" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                    <img src="../assets/white linked.png" alt="APUBCC LinkedIn" width="35" class="m-1">
                </a>

                <a href="https://www.instagram.com/apubcc" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                    <img src="../assets/white ig.png" alt="APUBCC Instagram" width="35" class="m-1">
                </a>

                <a href="https://www.youtube.com/@apubcc" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                    <img src="../assets/white you.png" alt="APUBCC Youtube" width="35" class="m-1">
                </a>

                <a href="https://github.com/APU-Blockchain-Cryptocurrency-Club" target="_blank" class="hover:bg-black transition delay-600 b b rounded-full">
                    <img src="../assets/white gh.png" alt="APUBCC GitHub" width="35" class="m-1">
                </a>

            </div>
            <div class="text-xs pl-3 text-white">
                <p>@APUBCC 2023</p>
            </div>

        </aside> 
        <nav>
            <header class="font-bold text-base text-orange-400"> General </header> 
            <a class="link link-hover text-white"> About Us</a> 
            <a class="link link-hover text-white">Our Team</a>
            <nuxt-link to="/faq">
                <a class="link link-hover text-white">FAQ</a>
            </nuxt-link>

        </nav> 
        <nav>
            <header class="font-bold text-base text-orange-400"> Event </header> 
            <nuxt-link to="/events">
                <a class="link link-hover text-white">Events</a>
            </nuxt-link>
        </nav> 
        <nav>
            <header class="font-bold text-base text-orange-400"> Resources </header> 
            <a class="link link-hover text-white">Blog</a>
            <a href="https://drive.google.com/drive/folders/14jBWb8b8P_woq8m7VnlT8yZ-1FQnNXOt" class="link link-hover text-white">Media Kit</a>
        </nav>
        <nav>
            <header class="font-bold text-base text-orange-400"> Support Us </header> 
            <a class="link link-hover text-white">Buy Us a coffee</a>
            <a class="link link-hover text-white">Crypto Addresses</a>
        </nav>
    </footer>
</template>