import { http } from "@/lib/http"
import { useCategoryStore } from "./category.store"

export const getCategoryData = async () => {
    const setState = useCategoryStore.getState().setState
    setState({ loading: true, error: undefined })
    try {
        
        const { data } : { data: []}= await http.get('/api/blog/categories')
    
        setState({
            categories: data,
            loading: false
        })


    } catch (error) {
        setState({ error: `Failed to fetch Categories`, loading: false })
    }
}