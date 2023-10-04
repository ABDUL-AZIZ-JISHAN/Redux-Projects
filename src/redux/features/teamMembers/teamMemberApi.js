import { APISlice } from "../api/APISlice";


export const teamMembersApi = APISlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => ({
                url: "/team"
            }),
            keepUnusedDataFor: 600
        }),
    })
})

export const  { useGetTeamMembersQuery } = teamMembersApi;