<template>
  <nav class="flex justify-between items-center">
        <div>
            <p class="text-lg font-normal text-gray-700 mb-1">display name</p>
            <p class="text-sm font-light text-gray-400">email</p>
        </div>
        <button @click="handleClick"
        class="text-lg font-medium bg-green-400 px-8 py-2 text-white rounded-full focus:outline-none hover:bg-green-500">
            Logout
        </button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
    setup() {
        const { logout, error} = useLogout()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('logged out')
            }
        }

    return { error, handleClick}

    }
}
</script>

<style>

</style>