import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hashnode.com' }),
  endpoints: (builder) => ({
    getHashNodeBlogs: builder.mutation({
      query: (data, variable = {}) => ({
        url: '/',
        method: 'post',
        body: {
          data,
          variable
        }
      })
    })
  })
})


export const { useGetHashNodeBlogsMutation } = blogApi;