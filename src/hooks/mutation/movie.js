import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiV1Instance } from "../../api"

export const useCreateMovie = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async ({ title, description, language }) => {
            const { data } = await apiV1Instance.post(`/movies`, {
                title,
                description,
                language
            })
            return data
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['movies'] })
    })
    return mutation
}