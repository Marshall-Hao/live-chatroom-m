<template>
   <form @submit.prevent="handleSubmit" class="justify-self-center space-y-8 w-6/12 mt-5 grid">
        <input type="email" required placeholder="email" v-model="email" class="block rounded-3xl text-gray-400 text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <input type="password" required placeholder="password" v-model="password" class="block rounded-3xl text-gray-400 text-lg pl-4 py-2 border border-gray-200 focus:outline-none">
        <button class="justify-self-center block bg-green-400 px-5 py-2 text-md font-medium rounded-full text-white text-center">Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            
        }
        return { email, password, handleSubmit}
    }
}
</script>

<style>

</style>