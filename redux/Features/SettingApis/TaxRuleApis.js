import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const TaxRuleApis = createApi({
    reducerPath: 'TaxRuleApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        createTaxRule: builder.mutation({
            query: (payload) => ({
                url: '/SettingTaxRule',
                method: 'POST',
                body: payload,
            }),
        }),
        updateTaxRule: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/SettingTaxRule/${id}`,
                method: 'PUT',
                body: payload,
            }),
        }),
        updateTaxRuleStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/SettingTaxRule/${id}/default/${status}`,
                method: 'PATCH',
            }),
        }),
        deleteTaxRule: builder.mutation({
            query: (id) => ({
                url: `/SettingTaxRule/${id}`,
                method: 'DELETE',
            }),
        }),
        getTaxRules: builder.query({
            query: () => ({
                url: '/SettingTaxRule',
                method: 'GET',
            }),
        }),
        getTaxRule: builder.query({
            query: (id) => ({
                url: `/SettingTaxRule/${id}`,
                method: 'GET',
            }),
        }),

    })
});

export const {
    useCreateTaxRuleMutation,
    useUpdateTaxRuleMutation,
    useUpdateTaxRuleStatusMutation,
    useDeleteTaxRuleMutation,
    useGetTaxRulesQuery,
    useGetTaxRuleQuery,
} = TaxRuleApis;
