<template>
  <div
    class="block align-middle my-12 max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="fname" class="block mb-2 text-sm font-medium text-blue-700">Your First Name</label>
        <input type="fname" id="fname"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="First Name" required />
      </div>
      <div class="mb-5">
        <label for="lname" class="block mb-2 text-sm font-medium text-blue-700">Your Last Name</label>
        <input type="lname" id="lname"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Last Name" required />
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-blue-700">Your Email</label>
        <input type="email" id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@domain.com" required />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>

<style scoped>
/* Add your styles here */
</style>
