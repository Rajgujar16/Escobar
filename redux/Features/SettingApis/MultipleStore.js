import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const MultipleStoreApis = createApi({
    reducerPath: 'MultipleStoreApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createMultiStore: builder.mutation({
            query: (payload) => ({
                url: '/SettingMultiStore/create',
                method: 'POST',
                body: payload,
            }),
        }),
        updateMultiStore: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/SettingMultiStore/update/${id}`,
                method: 'PUT',
                body: payload,
            }),
        }),

        deleteMultiStore: builder.mutation({
            query: (id) => ({
                url: `/SettingMultiStore/delete/${id}`,
                method: 'DELETE',
            }),
        }),
        getMultiStores: builder.query({
            query: () => ({
                url: '/SettingMultiStore/all',
                method: 'GET',
            }),
        }),
        getMultiStore: builder.query({
            query: (id) => ({
                url: `/SettingMultiStore/${id}`,
                method: 'GET',
            }),
        }),

    })
});

export const {
    useCreateMultiStoreMutation,
    useUpdateMultiStoreMutation,
    useDeleteMultiStoreMutation,
    useGetMultiStoresQuery,
    useGetMultiStoreQuery

} = MultipleStoreApis;
