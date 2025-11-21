import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "@/redux/utils/customBaseQuery";

export const DashboardApis = createApi({
  reducerPath: "DashboardApis",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    
    getDashBoardData: builder.query({
      query: () => ({
        url: `/Dashboard`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDashBoardDataQuery } = DashboardApis;
