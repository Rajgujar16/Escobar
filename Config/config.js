// Base URLs
const main_base_url = "https://stratagem.copulaa.com/api";
const tenant_base_url = "copulaa.com/api";
const protocal_url = "https://";
const urlchange_base = "igniventory.com";
const localBase = "localhost:3000";

// Igniventry URLs
// const igniventry_tenant_url = "karma.copulaa.com";
const igniventry_tenant_url = "igniventory.copulaa.com";
const igniventry_protocol_url = "https://";

// // Token & Subdomain
// import Cookies from "js-cookie";

// // Browser-only functions
// export const getSubdomain = () => {
//   if (typeof window !== "undefined") {
//     const fullURL = window.location.href;
//     const url = new URL(fullURL);
//     return url.hostname.split(".")[0];
//   }
//   return null;
// };

// export const getBearerToken = () => {
//   if (typeof window !== "undefined") {
//     return Cookies.get("token") || null;
//   }
//   return null;
// };

// Export constants
export {
  main_base_url,
  tenant_base_url,
  protocal_url,
  urlchange_base,
  localBase,
  igniventry_tenant_url,
  igniventry_protocol_url,
};
