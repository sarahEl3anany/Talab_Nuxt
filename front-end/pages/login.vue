<template>
  <div class="block align-middle my-12 max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
    <form>
      <div class="mb-5"> 
        <label for="email" class="block mb-2 text-sm font-medium text-blue-700">Your Email</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@domain.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-blue-700" >Your Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required/>
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-blue-700">
          Remember me
        </label>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Login
      </button>
    </form>
  </div>
</template>
  
  <script>
  export default {
    name: 'LoginPage'
  }
  </script>
  