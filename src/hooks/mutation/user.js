import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiV1Instance } from '../../api'

export const useSigninUser = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async function ({ email, password }) {
            const data = await apiV1Instance.post('/auth/signin', {
                email,
                password
            })
            return data
        },
        onSuccess: async ({ data }) => {
            const token = data.data.token;
            localStorage.setItem("token", token);
            await queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    })
    return mutation
}