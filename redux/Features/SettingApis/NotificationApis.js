import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const NotificationApis = createApi({
    reducerPath: 'NotificationApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createNotificationSetting: builder.mutation({
            query: (payload) => ({
                url: '/NotificationSettings',
                method: 'POST',
                body: payload
            }),
        }),


        updateNotificationSetting: builder.mutation({
            query: ({ payload, id }) => ({
                url: `/NotificationSettings/${id}`,
                method: 'PUT',
                body: payload
            }),
        }),


    })
});

export const {
    useCreateNotificationSettingMutation,
    useUpdateNotificationSettingMutation

} = NotificationApis;
