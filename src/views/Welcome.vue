<template>
  <div class="bg-white justify-self-center w-11/12 md:w-3/5 p-10 rounded-xl shadow-lg mt-20 text-center grid">
        <p class="text-base md:text-xl font-semibold tracking-wider mb-5 text-gray-500">Welcome to Secret Chatroom</p>
        <div v-if="showLogin" class="grid">
            <p class="text-lg md:text-3xl font-bold tracking-wider text-gray-600 mb-3">Login to chatroom</p>
            <LoginForm @login="enterChat"/>
            <p class="mt-5 text-sm text-gray-500">No account yet?<span @click="showLogin = false" class="font-bold text-lg underline px-2 text-gray-600 cursor-pointer">Signup</span>instead</p>
        </div>
        <div v-else class="grid">
            <p class="text-lg md:text-3xl font-bold tracking-wider text-gray-600 mb-3">Sign up for chatroom</p>
           <SignupForm @signup="enterChat"/>
           <p class="mt-5 text-sm text-gray-500">Already registered<span @click="showLogin = true" class="font-bold text-lg underline px-2 text-gray-600 cursor-pointer">Login</span>instead</p>
        </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    components: { SignupForm, LoginForm},
    setup() {
        const showLogin =ref(true)
        const router = useRouter()

        const enterChat = () => {
            router.push({ name: 'Chatroom' })
        }
        return { showLogin,enterChat }
    } 
}
</script>

<style>

</style>