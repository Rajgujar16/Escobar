import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const CustomApis = createApi({
    reducerPath: 'CustomApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createCustomer: builder.mutation({
            query: (payload) => ({
                url: '/Customer',
                method: 'POST',
                body: payload
            }),
        }),
        updateCustomer: builder.mutation({
            query: ({ payload, id }) => ({
                url: `/Customer/${id}`,
                method: 'PUT',
                body: payload
            }),
        }),

        DeleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/Customer/${id}`,
                method: 'DELETE',
            }),
        }),
        getAllCustomer: builder.query({
            query: () => ({
                url: `/Customer`,
                method: 'GET',
            }),
        }),
        getCustomer: builder.query({
            query: (id) => ({
                url: `/Customer/${id}`,
                method: 'GET',
            }),
        }),


    })
});

export const {
    useCreateCustomerMutation,
    useGetAllCustomerQuery,
    useGetCustomerQuery,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation,
} = CustomApis;
