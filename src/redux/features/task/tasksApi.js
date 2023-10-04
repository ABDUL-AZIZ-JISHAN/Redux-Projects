import { APISlice } from "../api/APISlice";

export const tasksApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: "/tasks",
      }),
      keepUnusedDataFor: 600,
    }),
    getTask: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
      keepUnusedDataFor: 600,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),
      //   update optimistic cache
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const pushToTask = dispatch(
          APISlice.util.updateQueryData("getTasks", undefined, (drafts) => {
            drafts.push(arg);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          pushToTask.undo();
        }
      },
    }),
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),

      //   update optimistic cache
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const pushToTask = dispatch(
          APISlice.util.updateQueryData("getTasks", undefined, (drafts) => {
            const indexToUpdate = drafts.findIndex((task) => task.id == id);
            if (indexToUpdate !== -1) {
              drafts[indexToUpdate] = data;
            }
          })
        );

        try {
          await queryFulfilled;
        } catch {
          pushToTask.undo();
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      //   update optimistic cache
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const pushToTask = dispatch(
          APISlice.util.updateQueryData("getTasks", undefined, (drafts) => {
            const indexToUpdate = drafts.findIndex((task) => task.id == arg);
            if (indexToUpdate !== -1) {
              drafts.splice(indexToUpdate, 1);
            }
          })
        );

        try {
          await queryFulfilled;
        } catch {
          pushToTask.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTaskQuery,
  useEditTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useAddTaskMutation,
} = tasksApi;
