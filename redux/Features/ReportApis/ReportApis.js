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

export const ReportApis = createApi({
    reducerPath: 'ReportApis',
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({
        getSalesReport: builder.query({
            query: () => ({ url: '/Reports/sales', method: 'GET' }),
        }),
        getInventoryReport: builder.query({
            query: () => ({ url: '/Reports/inventory', method: 'GET' }),
        }),
        getProfitLossReport: builder.query({
            query: () => ({ url: '/Reports/profitloss', method: 'GET' }),
        }),
        getGstReport: builder.query({
            query: () => ({ url: '/Reports/gst', method: 'GET' }),
        }),
        getPurchaseReport: builder.query({
            query: () => ({ url: '/Reports/purchase', method: 'GET' }),
        }),
        getExportType: builder.query({
            query: () => ({ url: '/Reports/types', method: 'GET' }),
        }),

        exportSalesReport: builder.query(createExportQuery('/Reports/exportSales', 'SalesReport.csv')),
        exportInventoryReport: builder.query(createExportQuery('/Reports/exportInventory', 'InventoryReport.csv')),
        exportProfitLossReport: builder.query(createExportQuery('/Reports/exportProfitLoss', 'ProfitLossReport.csv')),
        exportGSTReport: builder.query(createExportQuery('/Reports/exportGST', 'GSTReport.csv')),
        exportPurchaseReport: builder.query(createExportQuery('/Reports/exportPurchase', 'PurchaseReport.csv')),

        exportReport: builder.mutation({
            query: ({ reporttype, exportformat }) => ({
                url: "/Reports/export",
                method: "POST",
                body: { reporttype, exportformat },
                responseHandler: async (response) => {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `${reporttype}.${exportformat}`;
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.URL.revokeObjectURL(url);
                    return { success: true };
                },
            }),
        }),

        getDailyReport: builder.query({
            query: ({ fromDate, toDate, paymentType, billStatus }) => ({
                url: `/POSBills/getDailySalesReport?fromDate=${fromDate}&toDate=${toDate}&paymentType=${paymentType}&billStatus=${billStatus}`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetSalesReportQuery,
    useGetInventoryReportQuery,
    useGetProfitLossReportQuery,
    useGetGstReportQuery,
    useGetPurchaseReportQuery,
    useGetExportTypeQuery,
    useLazyExportSalesReportQuery,
    useLazyExportInventoryReportQuery,
    useLazyExportProfitLossReportQuery,
    useLazyExportGSTReportQuery,
    useLazyExportPurchaseReportQuery,
    useExportReportMutation,
    useGetDailyReportQuery,
} = ReportApis;
