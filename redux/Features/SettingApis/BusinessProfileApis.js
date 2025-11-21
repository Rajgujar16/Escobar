import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const BusinessProfileApis = createApi({
    reducerPath: 'BusinessProfileApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createBusinessProfile: builder.mutation({
            query: (payload) => ({
                url: '/SettingBusinessProfile',
                method: 'POST',
                body: payload,
            }),
        }),
        updateBusinessProfile: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/SettingBusinessProfile/${id}`,
                method: 'PUT',
                body: payload,
            }),
        }),
        deleteBusinessProfile: builder.mutation({
            query: ({ id }) => ({
                url: `/SettingBusinessProfile/${id}`,
                method: 'DELETE',
            }),
        }),
        getBusinessProfiles: builder.query({
            query: () => ({
                url: '/SettingBusinessProfile',
                method: 'GET',
            }),
        }),
        getBusinessProfile: builder.query({
            query: () => ({
                url: `/SettingBusinessProfile/10`,
                method: 'GET',
            }),
        }),

    })
});

export const {
    useCreateBusinessProfileMutation,
    useUpdateBusinessProfileMutation,
    useDeleteBusinessProfileMutation,
    useGetBusinessProfilesQuery,
    useGetBusinessProfileQuery,

} = BusinessProfileApis;
