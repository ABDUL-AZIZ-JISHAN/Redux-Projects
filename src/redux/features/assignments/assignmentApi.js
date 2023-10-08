import { APISlice } from "../api/APISlice";

export const AssignmentApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all assignments
    getAssignments: builder.query({
      query: () => ({
        url: `/assignments`,
      }),
    }),
    // get assignment according to video
    getVideoAssignment: builder.query({
      query: (videoId) => ({
        url: `/assignments?video_id=${videoId}`,
      }),
    }),
     // get single assignment
     getAssignment: builder.query({
      query: (id) => ({
        url: `/assignments/${id}`,
      }),
    }),
    // add new assignment
    addAssignment: builder.mutation({
      query: (data) => ({
        url: `/assignments`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        let updateToAssignments = dispatch(
          APISlice.util.updateQueryData("getAssignments", undefined, (draft) => {
            draft.push(data);
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
            updateToAssignments.undo();
        }

      },
    }),
 // edit assignment
 editAssignment: builder.mutation({
  query: (data) => ({
    url: `/assignments/${data.id}`,
    method: "PATCH",
    body: data,
  }),
  async onQueryStarted(data, { queryFulfilled, dispatch }) {
    let updateToAssignments = dispatch(
      APISlice.util.updateQueryData("getAssignments", undefined, (draft) => {
        const indexToRemove = draft.findIndex(v => v.id == data.id);
        if(indexToRemove !== -1){
         draft[indexToRemove] = data;
        }
      })
    );

    try{
      await queryFulfilled;
    }catch(e){
        updateToAssignments.undo();
    }

  },
}),
    // delete assignment
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assignments/${id}`,
        method: "Delete",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let updateToAssignments = dispatch(
          APISlice.util.updateQueryData("getAssignments", undefined, (draft) => {
             const indexToRemove = draft.findIndex(v => v.id == id);
             if(indexToRemove !== -1){
              draft.splice(indexToRemove, 1);
             }
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
            updateToAssignments.undo();
        }
        
      },
    }),
  }),
});

export const {
  useGetAssignmentQuery,
  useGetAssignmentsQuery,
  useAddAssignmentMutation,
  useEditAssignmentMutation,
  useDeleteAssignmentMutation,
  useGetVideoAssignmentQuery
} = AssignmentApi;
