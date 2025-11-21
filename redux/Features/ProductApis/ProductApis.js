import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/redux/utils/customBaseQuery";

export const ProductApis = createApi({
  reducerPath: "ProductApis",
  tagTypes: ["Product"],
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    createProducts: builder.mutation({
      query: (payload) => ({
        url: "/Product/Create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProducts: builder.mutation({
      query: (payload) => ({
        url: `/Product/Update/${payload.id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `/Product/Delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

    getAllProducts: builder.query({
      query: () => ({
        url: "/Product/all",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    exportProducts: builder.query({
      query: () => ({
        url: "/Product/export",
        method: "GET",
        responseHandler: async (response) => {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          return { downloadUrl: url };
        },
      }),
      providesTags: ["Product"],
    }),

    getInventoryDashboard: builder.query({
      query: () => ({
        url: "/Product/inventoryDashboard",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    importProducts: builder.mutation({
      query: (formData) => ({
        url: "/Product/import",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),


    addStock: builder.mutation({
      query: ({ payload }) => ({
        url: `/StockOperation/Create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
    updateStock: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/StockOperation/update/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
  useGetAllProductsQuery,
  useExportProductsQuery,
  useGetInventoryDashboardQuery,
  useImportProductsMutation,
} = ProductApis;
