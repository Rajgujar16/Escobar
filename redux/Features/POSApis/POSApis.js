import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

const getExportQuery = (url, fileName) => ({
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

export const POSApis = createApi({
    reducerPath: 'POSApis',
    tagTypes: ['POSBills'],
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({



        getBillById: builder.query({
            query: (search) => ({
                url: `/POSBills/getOrderBy-OrderId?orderId=${search}`,
                method: 'GET',
            }),
            providesTags: ['POSBills'],
        }),

        deleteBill: builder.mutation({
            query: ({ OrderId, Status, DeletedBy }) => ({
                url: `/POSBills/delete-order?OrderId=${OrderId}&Status=${Status}&DeletedBy=${DeletedBy}`,
                method: 'Delete',
            }),
            invalidatesTags: ["POSBills"],
        }),


        getAllBills: builder.query({
            query: ({ search = "", status = "", dateFrom = "", dateTo = "" }) => ({
                url: `/POSBills/all-orders?search=${search}&status=${status}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
                method: 'GET',
            }),
            providesTags: ['POSBills'],
        }),

        getPosPendingBills: builder.query({
            query: () => ({
                url: '/POSBills/pending-bills',
                method: 'GET',
            }),
            providesTags: ['POSBills'],
        }),
        getReturnExchange: builder.query({
            query: (id) => ({
                url: `/POSBills/return-exchange?search=${id}`,
                method: 'GET',
            }),
            providesTags: ['POSBills'],
        }),
        createNewBill: builder.mutation({
            query: ({ payload, id }) => {
                const url = id ? `/POSBills/create?orderId=${id}` : `/POSBills/create`;
                return {
                    url,
                    method: "POST",
                    body: payload,
                };
            },
            invalidatesTags: ["POSBills"],
        }),



        //return/exchange-
        createPosReturnExchange: builder.mutation({
            query: (payload) => ({
                url: 'POSBills/CreateReturnExchange',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['POSBills'],
        }),

        exportPendingReport: builder.query(getExportQuery('/POSBills/export-orders-csv?status=hold', 'PendingReport.csv')),
        exportReturnReport: builder.query(getExportQuery('/Reports/exportSales?status=return', 'ReturnExchangeReport.csv')),
        exportCompleteReport: builder.query(getExportQuery('/Reports/exportSales?status=paynow', 'CompleteReport.csv')),
    })
});

export const {
    useGetPosPendingBillsQuery,
    useGetReturnExchangeQuery,
    useCreateNewBillMutation,
    useDeleteBillMutation,
    useGetAllBillsQuery,
    useGetBillByIdQuery,
    useCreatePosReturnExchangeMutation,
    useLazyExportCompleteReportQuery,
    useLazyExportReturnReportQuery,
    useLazyExportPendingReportQuery
} = POSApis;
