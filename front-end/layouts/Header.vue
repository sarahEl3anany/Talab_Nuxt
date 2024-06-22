<template>
    <nav class="bg-blue-500 shadow-md">
      <div class="my-auto mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex space-x-2 w-12 h-12">
          <NuxtLink to="/" class="rounded-full">
            <NuxtImg src="/Talab.jpeg" ></NuxtImg>
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/register" class="inline-block border border-blue-900 rounded py-1 px-3 bg-gray-50 text-blue-900">
            Register
            <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>
        <div>
          <NuxtLink to="/login" class="inline-block border border-blue-900 rounded py-1 px-3 bg-gray-50 text-blue-900">
            Login
            <font-awesome-icon class="pl-3" :icon="['fas', 'arrow-right']" />
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>
