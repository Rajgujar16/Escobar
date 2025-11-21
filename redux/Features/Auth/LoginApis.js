import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const LoginApis = createApi({
    reducerPath: 'LoginApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (payload) => ({
                url: '/Users/login',
                method: 'POST',
                body: payload
            }),
        }),
        forgetPass: builder.mutation({
            query: (payload) => ({
                url: '/Users/reset-password',
                method: 'POST',
                body: payload
            }),
        }),
    })
});

export const {
    useLoginMutation,
    useForgetPassMutation

} = LoginApis;
