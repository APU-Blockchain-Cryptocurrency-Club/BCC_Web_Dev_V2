<template>
  <NavBar />
  <div class="background-container">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  <Footer />
</template>

<style scoped>
.background-container {
  background-image: url('./assets/bg.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
</style>

<!-- <template>
  <NavBar />
  <body>
    <img src="./assets/bg.png" alt="background" class="absolute inset-0 w-full h-full object-cover">
  </body>
  <Footer />
</template> -->

