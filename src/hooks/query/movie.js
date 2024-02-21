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

export const useGetMovieById = (id) => {
    const query = useQuery({
        queryKey: ['movies', id],
        queryFn: async () => {
            const { data } = await apiV1Instance.get(`/movies/${id}`)
            return data.data
        }
    })

    return { ...query, movie: query?.data?.movie }
}

export const useGetMovieSchedule = (id) => {

    const query = useQuery({
        queryKey: ['movie', 'schedule', id],
        queryFn: async () => {
            const { data } = await apiV1Instance.get(`/movies/${id}/schedule`)
            return data.data
        }
    })

    return { ...query, schedule: query?.data?.schedule }
}