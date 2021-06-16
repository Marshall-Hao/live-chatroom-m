<template>
  <form @submit.prevent="handleSubmit" class="justify-self-center space-y-8 w-11/12 md:w-6/12 mt-5 grid">
        <input type="text" required placeholder="display name" v-model="displayName" class="block rounded-3xl text-gray-400 text-base md:text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <input type="email" required placeholder="email" v-model="email" class="block rounded-3xl text-gray-400 text-base md:text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <input type="password" required placeholder="password" v-model="password" class="block rounded-3xl text-gray-400 text-base md:text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <div class="grid">
            <div class="text-xs font-light text-red-600">{{ error }}</div>
            <button class="justify-self-center block bg-green-400 px-5 py-2 text-sm md:text-md font-medium rounded-full text-white text-center focus:outline-none hover:bg-green-500">Sign up</button>
        </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'

export default {
    setup( props, context) {
        const { error, signup } = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log('user sign up')
            if (!error.value) {
                context.emit('signup')
            }
         }
        return { displayName, email, password, error,handleSubmit}
    }
}
</script>

<style>

</style>