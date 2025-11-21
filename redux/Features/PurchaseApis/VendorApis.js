import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/redux/utils/customBaseQuery";

export const VendorApis = createApi({
    reducerPath: "VendorApis",
    baseQuery: customBaseQuery,
    tagTypes: ["Vendors"],
    endpoints: (builder) => ({
        getAllVendors: builder.query({
            query: () => ({
                url: "/Vendor/allVendors",
                method: "GET",
            }),
            providesTags: ["Vendors"],
        }),
        createVendor: builder.mutation({
            query: (payload) => ({
                url: "/Vendor/createVendor",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Vendors"],
        }),
        updateVendor: builder.mutation({
            query: (payload) => ({
                url: `/Vendor/updateVendor`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: ["Vendors"],
        }),
        deleteVendor: builder.mutation({
            query: (id) => ({
                url: `/Vendor/deleteVendor/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Vendors"],
        }),

    }),
});

export const {
    useGetAllVendorsQuery,
    useCreateVendorMutation,
    useUpdateVendorMutation,
    useDeleteVendorMutation,

} = VendorApis;
