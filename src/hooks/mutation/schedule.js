import { useMutation } from "@tanstack/react-query"
import { apiV1Instance } from "../../api"

export const useCreateSchedule = () => {

    const mutation = useMutation({
        mutationFn: async ({ movieId, theatreId, startTime, price }) => {
            const { data } = await apiV1Instance.post(`/schedule`, {
                movieId, theatreId, startTime, price
            })
            return data
        },

    })
    return mutation
}