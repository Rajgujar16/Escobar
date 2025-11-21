import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '@/redux/utils/customBaseQuery';

export const EmployeeApis = createApi({
    reducerPath: 'EmployeeApis',
    tagTypes: ['Employee'],
    baseQuery: customBaseQuery,
    endpoints: (builder) => ({

        getEmployee: builder.query({
            query: () => ({
                url: '/Employee',
                method: 'GET',
            }),
            providesTags: ['Employee']
        }),

        createEmployee: builder.mutation({
            query: (payload) => ({
                url: '/Employee/create',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['Employee']
        }),

        updateEmployee: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/Employee/${id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: ['Employee']
        }),

        deleteEmployee: builder.mutation({
            query: (id) => ({
                url: `/Employee/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employee']
        }),

        statusChange: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/Employee/change-status/${id}`,
                method: 'PATCH',
                body: payload
            }),
            invalidatesTags: ['Employee']
        }),


    })
});

export const {
    useGetEmployeeQuery,
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
    useStatusChangeMutation
} = EmployeeApis;

