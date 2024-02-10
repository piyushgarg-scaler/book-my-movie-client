import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiV1Instance } from "../../api"

export const useCreateTheatre = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: async ({ name, location: { lat, lon, address } }) => {
            const { data } = await apiV1Instance.post(`/theatre`, {
                name,
                location: {
                    lat,
                    lon,
                    address
                }
            })
            return data
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['theatre'] })
    })
    return mutation
}