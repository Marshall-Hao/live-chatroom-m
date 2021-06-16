<template>
   <form @submit.prevent="handleSubmit" class="justify-self-center space-y-8 w-11/12 md:w-6/12 mt-5 grid">
        <input type="email" required placeholder="email" v-model="email" class="block rounded-3xl text-gray-400 text-base md:text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <input type="password" required placeholder="password" v-model="password" class="block rounded-3xl text-gray-400 text-base md:text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <div class="grid">
            <div class="text-xs font-light text-red-600">{{ error }}</div>
            <button class="justify-self-center block bg-green-400 px-5 py-2 text-sm md:text-md font-medium rounded-full text-white text-center focus:outline-none hover:bg-green-500">Login</button>
        </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                context.emit('login')
            }
        }
        return { email, password, handleSubmit,error }
    }
}
</script>

<style>

</style>