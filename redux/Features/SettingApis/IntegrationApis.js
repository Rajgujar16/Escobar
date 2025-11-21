import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const IntegrationApis = createApi({
    reducerPath: 'IntegrationApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        addAPIKey: builder.mutation({
            query: (payload) => ({
                url: '/SettingIntegration',
                method: 'POST',
                body: payload
            }),
        }),
        updateAPIKey: builder.mutation({
            query: ({ payload, id }) => ({
                url: `/SettingIntegration/${id}`,
                method: 'PUT',
                body: payload
            }),
        }),
        deleteAPIKey: builder.mutation({
            query: (id) => ({
                url: `/SettingIntegration/${id}`,
                method: 'DELETE',
            }),
        }),
        getAPIKey: builder.query({
            query: () => ({
                url: '/SettingIntegration',
                method: 'GET',
            }),
        }),



    })
});

export const {
    useAddAPIKeyMutation,
    useUpdateAPIKeyMutation,
    useDeleteAPIKeyMutation,
    useGetAPIKeyQuery,

} = IntegrationApis;

