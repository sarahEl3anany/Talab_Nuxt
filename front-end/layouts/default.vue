<template>
  <div class="default">
    <nav class="bg-white shadow-md">
      <div class="my-auto mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2 w-20 h-20">
          <img src="/favicon.ico" />
        </div>
        <div>
          <NuxtLink to="/register" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">
            Register
            <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>
      </div>
    </nav>
    <slot />
    <footer class="bg-blue-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>© 2024 Sarah</p>
      </div>
    </footer>
  </div>
</template>