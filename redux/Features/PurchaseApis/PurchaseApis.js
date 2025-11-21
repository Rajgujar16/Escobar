import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/redux/utils/customBaseQuery";
import { use } from "react";

export const PurchaseApis = createApi({
  reducerPath: "PurchaseApis",
  baseQuery: customBaseQuery,
  tagTypes: ["Purchases"],
  endpoints: (builder) => ({
    exportPurchase: builder.query({
      query: () => ({
        url: "/PurchaseOrder/export",
        method: "GET",
        responseHandler: async (response) => {
          return await response.blob();
        },
      }),
      invalidatesTags: ["Purchases"],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/PurchaseOrder/getAll",
        method: "GET",
      }),
      providesTags: ["Purchases"],
    }),

    getOrder: builder.query({
      query: () => ({
        url: `/PurchaseOrder/getById/${id}`,
        method: "GET",
      }),
      providesTags: ["Purchases"],
    }),
    getOrderSummary: builder.query({
      query: (purchaseOrderId) => ({
        url: `/PurchaseOrder/orderSummary/${purchaseOrderId}`,
        method: "GET",
      }),
      providesTags: ["Purchases"],
    }),
    getPODetail: builder.query({
      query: (purchaseOrderId) => ({
        url: `/PurchaseOrder/getPurchaseOrderDetails/${purchaseOrderId}`,
        method: "GET",
      }),
      providesTags: ["Purchases"],
    }),

    importPurchaseOrders: builder.mutation({
      query: (formData) => ({
        url: "/PurchaseOrder/import",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Purchases"],
    }),

    addPurchaseOrder: builder.mutation({
      query: (payload) => ({
        url: "/PurchaseOrder/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Purchases"],
    }),
    updatePurchaseOrder: builder.mutation({
      query: (payload) => ({
        url: `/PurchaseOrder/update`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Purchases"],
    }),
    updatePurchaseOrderSummary: builder.mutation({
      query: ({ orderStatus, payload }) => ({
        url: `/PurchaseOrder/updateSummary/${orderStatus}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Purchases"],
    }),
    deletePurchaseOrder: builder.mutation({
      query: (purchaseOrderId) => ({
        url: `/PurchaseOrder/${purchaseOrderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Purchases"],
    }),

    getLowStockProduct: builder.query({
      query: (payload) => ({
        url: `/PurchaseOrder/low-stock-products?${payload}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useExportPurchaseQuery,
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useGetOrderSummaryQuery,
  useImportPurchaseOrdersMutation,
  useUpdatePurchaseOrderSummaryMutation,
  useUpdatePurchaseOrderMutation,
  useAddPurchaseOrderMutation,
  useDeletePurchaseOrderMutation,
  useGetLowStockProductQuery,
  useGetPODetailQuery,
} = PurchaseApis;
