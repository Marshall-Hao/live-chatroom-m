<template>
  <div class="bg-white justify-self-center w-3/5 p-8 rounded-2xl shadow-lg mt-20 grid">
      <Navbar @logout="logoutUser"/>
      <NewChatForm />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import getUser from '../composables/getUser'

export default {
    components: { Navbar, NewChatForm},
    setup() {
        const { user } = getUser()
        const router = useRouter()

        // can also be done with watch method, watch the value of the user ref
        const logoutUser = () => {
            router.push({name: 'Welcome'})
        }

        return { user, logoutUser }
    }
}
</script>

<style>

</style>