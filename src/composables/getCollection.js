import { ref } from "@vue/reactivity"
import { projectFirestore } from "../firebase/config"

const getCollection = async (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collection = projectFirestore.collection(collection).orderBy('createdAt')

    collection.onSnapshot(() => {
        let results = []
        snap.docs.forEach(doc => {
           doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value =  results
        error.value =  null
    }), (err) => {
        console.log(err.message)
        documents.value = nullerror.value = 'could not fetch data'
    }

    return { documents, error}
}

export default getCollection