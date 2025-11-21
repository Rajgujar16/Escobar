import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const StockApis = createApi({
    reducerPath: 'StockApis',
    tagTypes: ['POSBills'],
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createStock: builder.mutation({
            query: (payload) => ({
                url: '/StockOperation/create',
                method: 'POST',
                body: payload
            }),

            invalidatesTags: ['POSBills'],
        }),

        getStock: builder.query({
            query: (id) => ({
                url: `/StockOperation/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['POSBills'],
        }),
        updateStock: builder.mutation({
            query: ({ payload, id }) => ({
                url: `/StockOperation/update/${id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: ['POSBills'],
        }),


    })
});

export const {
    useCreateStockMutation,
    useUpdateStockMutation,
    useGetStockQuery
} = StockApis;
