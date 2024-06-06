<template>
        <nav class="bg-blue-700 shadow-md">
      <div class="my-auto mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex space-x-2 w-12 h-12">
          <NuxtImg class="rounded-full" src="/favicon.ico"></NuxtImg>
        </div>
        <div>
          <NuxtLink to="/register" class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-50 text-blue-800">
            Register
            <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>
