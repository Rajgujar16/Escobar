import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const GRNApis = createApi({
    reducerPath: 'GRNApis',
    baseQuery: customBaseQuery,
    tagTypes: ['GRN'],
    endpoints: (builder) => ({

        createGRN: builder.mutation({
            query: (payload) => ({
                url: '/GRN/add-grn',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['GRN'],
        }),

        getAllGRN: builder.query({
            query: () => ({
                url: '/GRN/get-all-grn',
                method: 'GET',
            }),
            providesTags: ['GRN'],
        }),
        getGRNProducts: builder.query({
            query: (grnNumber) => ({
                url: `/GRN/getGRNByGRNNumber/${grnNumber}`,
                method: 'GET',
            }),
            providesTags: ['GRN'],
        }),



    })
});

export const {
    useCreateGRNMutation,
    useGetAllGRNQuery,
    useGetGRNProductsQuery

} = GRNApis;

