import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

const createExportQuery = (url, fileName) => ({
    query: () => ({
        url,
        method: 'GET',
        responseHandler: async (response) => {
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
            return { success: true };
        },
    }),
});

export const PaymentApis = createApi({
    reducerPath: 'PaymentApis',
    baseQuery: customBaseQuery,
    tagTypes: ['Payments'],
    endpoints: (builder) => ({

        createPayment: builder.mutation({
            query: (payload) => ({
                url: '/Payments/add',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['Payments'],
        }),
        updatePayment: builder.mutation({
            query: (payload) => ({
                url: '/Payments/update',
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: ['Payments'],
        }),

        getAllPayment: builder.query({
            query: () => ({
                url: '/Payments/get-all',
                method: 'GET',
            }),
            providesTags: ['Payments'],
        }),

        exportPayment: builder.query(createExportQuery('/Payments/exports', 'Payment.csv')),

    })
});

export const {
    useCreatePaymentMutation,
    useGetAllPaymentQuery,
    useLazyExportPaymentQuery,
    useUpdatePaymentMutation,
} = PaymentApis;

