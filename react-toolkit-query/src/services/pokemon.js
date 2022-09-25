import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://123.207.32.32:9001/' }),
  endpoints: (builder) => ({
    getBanner: builder.query({
      query: (name) => `/banner`,
    }),
  }),
})

export const { useGetBannerQuery } = pokemonApi