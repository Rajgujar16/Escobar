import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const SystemSettingApis = createApi({
    reducerPath: 'SystemSettingApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createSystemSetting: builder.mutation({
            query: (payload) => ({
                url: '/SystemSettings',
                method: 'POST',
                body: payload
            }),
        }),


        updateSystemSetting: builder.mutation({
            query: ({ payload, id }) => ({
                url: `/StockOperation/update/${id}`,
                method: 'PUT',
                body: payload
            }),
        }),


    })
});

export const {
    useCreateSystemSettingMutation,
    useUpdateSystemSettingMutation
} = SystemSettingApis;
