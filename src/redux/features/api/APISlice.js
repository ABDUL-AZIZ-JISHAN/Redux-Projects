import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const APISlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080',
    }),
    endpoints: () => ({}),
    // tagTypes: ["Books", "Book"],
    // endpoints: (builder) => ({
    //     // get all books
    //    getBooks: builder.query({
    //     query: () => ({
    //         url: `/books`,
    //     }),
    //     providesTags : ["Books"],
    //     keepUnusedDataFor: 600
    //    }),
    // //    get single book
    //    getBook : builder.query({
    //     query: (id) => ({
    //         url: `/books/${id}`,
    //     }),
    //     keepUnusedDataFor: 600
    //    }),
    // //    add new book
    //    addBook : builder.mutation({
    //     query: (data) => ({
    //         url: "/books",
    //         method: 'POST',
    //         body: data
    //     }),
    //     invalidatesTags: ["Books"],
    //     providesTags: (result, error, args) => [{type: "Book", id: args.id}]
    //    }),

    //    //    add new book
    //    updateBook : builder.mutation({
    //     query: ({id, data}) => ({
    //         url: `/books/${id}`,
    //         method: 'PATCH',
    //         body: data
    //     }),
    //     invalidatesTags: (result , error , arg) => [
    //         "Books",
    //         {type: "Book", id: arg.id}
    //     ],
    //    }),
    // //    delete a book 
    //  deleteBook : builder.mutation({
    //     query: (id) => ({
    //         url: `/books/${id}`,
    //         method: 'DELETE'
    //     }),
    //     invalidatesTags: ["Books"]
    //    })
    // })
})

