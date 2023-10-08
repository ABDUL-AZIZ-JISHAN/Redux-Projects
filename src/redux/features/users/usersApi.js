import { APISlice } from "../api/APISlice";

export const usersApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all users
    getUsers: builder.query({
      query: () => ({
        url: `/users`,
      }),
      keepUnusedDataFor: 600,
    }),
    // get single user
    getUser: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: 'POST',
        body: data
      }),
    }),
    // create single user
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      })
    }),
  }),
});

export const { useGetUsersQuery, useGetUserMutation, useCreateUserMutation } =
  usersApi;
