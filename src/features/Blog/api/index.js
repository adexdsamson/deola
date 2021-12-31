import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.hashnode.com' }),
  endpoints: (builder) => ({
    getHashNodeBlogs: builder.mutation({
      query: ({ query, variables }) => ({
        url: '/',
        method: 'post',
        body: {
          query,
          variables
        }
      })
    })
  })
})


export const { useGetHashNodeBlogsMutation } = blogApi;