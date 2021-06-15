<template>
  <nav v-if="user" class="flex justify-between items-center">
        <div>
            <p class="text-lg font-normal text-gray-700 mb-1">Hey there {{ user.displayName }}</p>
            <p class="text-sm font-light text-gray-400">Currently logged in as {{ user.email }}</p>
        </div>
        <button @click="handleClick"
        class="text-lg font-medium bg-green-400 px-8 py-2 text-white rounded-full focus:outline-none hover:bg-green-500">
            Logout
        </button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup(props, context) {
        const { logout, error} = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('logged out')
                context.emit('logout')
            }
        }

    return { error, handleClick, user}

    }
}
</script>

<style>

</style>