<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" class="space-y-3 bg-gray-50 rounded-xl py-10 px-2 mt-5">
            <div v-for="doc in documents" :key="doc.id" class="block">
                <span class="text-sm text-gray-400 font-medium">{{ doc.createdAt.toDate() }}</span>
                <div class="space-x-3">
                    <span class="inline-block text-lg font-semibold tracking-wide">{{ doc.name }}</span>
                    <span class="inline-block text-md text-base font-medium text-gray-700">{{ doc.message }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
    setup() {
        const { documents, error } = getCollection('messages')

        return { error, documents }
    }


}
</script>

<style>

</style>