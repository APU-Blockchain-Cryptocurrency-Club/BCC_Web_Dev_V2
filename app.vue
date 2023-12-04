<template>
    <div class="background-container z-0">
        <NavBar />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
    <Footer />
</template>

<style scoped>
    .background-container {
        background-image: url("./assets/bg.png");
        background-size: cover;
        background-position: center;
        min-height: 100vh;
    }
</style>

<script setup lang="ts">
    useHead({
        title: "APUBCC",
        meta: [
            {
                name: "APU Blockchain & Crypto Club",
                content: "APU Blockchain & Crypto Club Official Website",
            },
        ],
    });
</script>
