<template>
  <form class="w-full">
      <textarea placeholder="Type a message and hit enter to send..." 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      class="w-full focus:outline-none mt-10 border border-gray-200 rounded-2xl p-3 h-24 text-md font-medium text-gray-700">
      </textarea>
      <div class="text-xs font-light text-red-600">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'

export default {
    setup() {
        const message = ref('')
        const { user } = getUser()
        const { error, addDoc } = useCollection('messages')

        const handleSubmit = async() => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            await addDoc(chat)
            if (!error.value) {
                message.value = ''
            }
        }
        return { message, handleSubmit, error }
    }
}
</script>

<style>

</style>