import Cookies from "js-cookie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL (including the `/api` prefix) of the Zaibaraish backend.
// Configure via NEXT_PUBLIC_API_URL in .env.local; defaults to the local backend for dev.
const NEXT_PUBLIC_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      try {
        const userInfo = Cookies.get('userInfo');
        if (userInfo) {
          const user = JSON.parse(userInfo);
          if (user?.accessToken) {
            headers.set("Authorization", `Bearer ${user.accessToken}`);
          }
        }
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Products","Coupon","Product","RelatedProducts","UserOrder","UserOrders","ProductType","OfferProducts","PopularProducts","TopRatedProducts"]
});