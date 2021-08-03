import { ref } from 'vue'
import axios from 'axios'

export default function useAdminPosts() {
    const posts = ref([])
    const post = ref([])

    const fetchPosts = async () => {
        let response = await axios.get('/api/admin/posts')
        posts.value = response.data.data
    }

    const fetchPost = async (slug) => {
        let response = await axios.get(`/api/admin/posts/${slug}/edit`)
        post.value = response.data.data
    }

    const createPost = async () => {
        let response = await axios.post('/api/admin/posts')

        return response.data.data
    }

    const patchPost = async (uuid) => {
        let response = await axios.patch(`/api/admin/posts/${uuid}`, post.value)

        return response.data.data
    }

    return {
        posts,
        post,
        fetchPosts,
        fetchPost,
        createPost,
        patchPost
    }
}