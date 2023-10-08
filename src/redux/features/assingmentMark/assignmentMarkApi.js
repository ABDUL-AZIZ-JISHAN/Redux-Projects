import { APISlice } from "../api/APISlice";

export const AssignmentApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all assignment marks
    getAssignmentMarks: builder.query({
      query: () => ({
        url: `/assignmentMark`,
      }),
    }),
    // get single assignment
    getAssignmentMark: builder.query({
      query: (id) => ({
        url: `/assignmentMark/${id}`,
      }),     
    }),
    // add new assignment
    addAssignmentMark: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        let updateToAssignmentMark = dispatch(
          APISlice.util.updateQueryData(
            "getAssignmentMarks",
            undefined,
            (draft) => {
              draft.push(data);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (e) {
          updateToAssignmentMark.undo();
        }
      },
    }),
    // edit assignment
    editAssignmentMark: builder.mutation({
      query: (data) => ({
        url: `/assignmentMark/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        let updateToAssignmentMark = dispatch(
          APISlice.util.updateQueryData(
            "getAssignmentMarks",
            undefined,
            (draft) => {
              const indexToRemove = draft.findIndex((v) => v.id == data.id);
              if (indexToRemove !== -1) {
                draft[indexToRemove] = data;
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (e) {
          updateToAssignmentMark.undo();
        }
      },
    })
  }),
});

export const {
  useGetAssignmentMarkQuery,
  useGetAssignmentMarksQuery,
  useDeleteAssignmentMarkMutation,
  useAddAssignmentMarkMutation,
  useEditAssignmentMarkMutation,
} = AssignmentApi;
