import { configureStore } from "@reduxjs/toolkit";
import { ProductApis } from "./Features/ProductApis/ProductApis";
import { StockApis } from "./Features/ProductApis/StockApis";
import { CustomApis } from "./Features/CustomersApis/CustomerApi";
import { BusinessProfileApis } from "./Features/SettingApis/BusinessProfileApis";
import { TaxRuleApis } from "./Features/SettingApis/TaxRuleApis";
import { MultipleStoreApis } from "./Features/SettingApis/MultipleStore";
import { SystemSettingApis } from "./Features/SettingApis/SystemSettingApis";
import { NotificationApis } from "./Features/SettingApis/NotificationApis";
import { IntegrationApis } from "./Features/SettingApis/IntegrationApis";
import { POSApis } from "./Features/POSApis/POSApis";
import { PurchaseApis } from "./Features/PurchaseApis/PurchaseApis";
import { DashboardApis } from "./Features/DashboardApis/DashboardApis";
import { VendorApis } from "./Features/PurchaseApis/VendorApis";
import { ReportApis } from "./Features/ReportApis/ReportApis";
import { LoginApis } from "./Features/Auth/LoginApis";
import { GRNApis } from "./Features/PurchaseApis/GRNApis";
import { PaymentApis } from "./Features/PurchaseApis/PaymentApis";
import { EmployeeApis } from "./Features/SettingApis/EmployeeApis";

export const store = configureStore({
  reducer: {
    // Local slices
    // auth: authReducer,
    // ui: uiReducer,

    // API reducers
    [ProductApis.reducerPath]: ProductApis.reducer,
    [StockApis.reducerPath]: StockApis.reducer,
    [CustomApis.reducerPath]: CustomApis.reducer,
    [BusinessProfileApis.reducerPath]: BusinessProfileApis.reducer,
    [TaxRuleApis.reducerPath]: TaxRuleApis.reducer,
    [MultipleStoreApis.reducerPath]: MultipleStoreApis.reducer,
    [SystemSettingApis.reducerPath]: SystemSettingApis.reducer,
    [NotificationApis.reducerPath]: NotificationApis.reducer,
    [IntegrationApis.reducerPath]: IntegrationApis.reducer,
    [POSApis.reducerPath]: POSApis.reducer,
    [PurchaseApis.reducerPath]: PurchaseApis.reducer,
    [DashboardApis.reducerPath]: DashboardApis.reducer,
    [VendorApis.reducerPath]: VendorApis.reducer,
    [ReportApis.reducerPath]: ReportApis.reducer,
    [LoginApis.reducerPath]: LoginApis.reducer,
    [GRNApis.reducerPath]: GRNApis.reducer,
    [PaymentApis.reducerPath]: PaymentApis.reducer,
    [EmployeeApis.reducerPath]: EmployeeApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(ProductApis.middleware)
      .concat(StockApis.middleware)
      .concat(CustomApis.middleware)
      .concat(BusinessProfileApis.middleware)
      .concat(TaxRuleApis.middleware)
      .concat(MultipleStoreApis.middleware)
      .concat(NotificationApis.middleware)
      .concat(IntegrationApis.middleware)
      .concat(POSApis.middleware)
      .concat(PurchaseApis.middleware)
      .concat(DashboardApis.middleware)
      .concat(VendorApis.middleware)
      .concat(ReportApis.middleware)
      .concat(LoginApis.middleware)
      .concat(GRNApis.middleware)
      .concat(PaymentApis.middleware)
      .concat(EmployeeApis.middleware),
});

export default store;
