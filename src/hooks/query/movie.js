import { useQuery } from "@tanstack/react-query"
import { apiV1Instance } from '../../api/'


export const useGetAllMovies = () => {
    const query = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
            const { data } = await apiV1Instance.get(`/movies`)
            return data.data
        }
    })

    return { ...query, movies: query?.data?.movies, page: query?.data?.page }
}