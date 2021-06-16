<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" ref="message" class="space-y-3 bg-gray-50 rounded-xl py-6 px-2 mt-5 h-96 md:h-80 overflow-y-auto">
            <div v-for="doc in formatteDocuments" :key="doc.id" class="block">
                <span class="text-sm text-gray-400 font-medium">{{ doc.createdAt }}</span>
                <div class="flex">
                    <span class="inline-block text-lg font-semibold tracking-wide mr-3">{{ doc.name }}</span>
                    <span class="inline-block text-md text-base font-medium text-gray-700 overflow-ellipsis break-all">{{ doc.message }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated } from '@vue/runtime-core'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const { documents, error } = getCollection('messages')

        const formatteDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time}
                })
            }
        })

        //auto-scroll to bottom of chatbox
        const message = ref(null)

        onUpdated(() => {
            message.value.scrollTop = message.value.scrollHeight
        })
        return { error, documents, formatteDocuments, message }
    }


}
</script>

<style>

</style>