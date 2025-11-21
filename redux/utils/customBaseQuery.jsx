import {
  igniventry_protocol_url,
  igniventry_tenant_url,
} from "@/Config/config";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const customBaseQuery = fetchBaseQuery({
  baseUrl: `${igniventry_protocol_url}${igniventry_tenant_url}/api`,
  prepareHeaders: (headers, { endpoint, type }) => {
    headers.set("accept", "*/*");

    // if (!(type === "mutation" && endpoint === "createBusinessProfile")) {
    //   headers.set("Content-Type", "application/json");
    // }
    if (
      !(
        type === "mutation" &&
        (endpoint === "createBusinessProfile" ||
          endpoint === "importPurchaseOrders" ||
          endpoint === "importProducts") 
      )
    ) {
      headers.set("Content-Type", "application/json");
    }


    return headers;
  },
});
