/* eslint-disable eqeqeq */
import { APISlice } from "../api/APISlice";

export const QuizzesApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all quizzes
    getQuizzes: builder.query({
      query: () => ({
        url: `/quizzes`,
      }),
    }),
    // get single quiz according to video 
    getVideoQuiz: builder.query({
      query: (videoId) => ({
        url: `/quizzes?video_id=${videoId}`,
      }),
    }),
     // get single quiz
     getQuiz: builder.query({
      query: (id) => ({
        url: `/quizzes/${id}`,
      }),
    }),
    // add new quiz
    addQuiz: builder.mutation({
      query: (data) => ({
        url: `/quizzes`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        let updateToQuizzes = dispatch(
          APISlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            draft.push(data);
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
            updateToQuizzes.undo();
        }

      },
    }),
 // edit quiz
 editQuiz: builder.mutation({
  query: (data) => ({
    url: `/quizzes/${data.id}`,
    method: "PATCH",
    body: data,
  }),
  async onQueryStarted(data, { queryFulfilled, dispatch }) {
    let updateToQuizzes = dispatch(
      APISlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
        const indexToRemove = draft.findIndex(v => v.id == data.id);
        if(indexToRemove !== -1){
         draft[indexToRemove] = data;
        }
      })
    );

    try{
      await queryFulfilled;
    }catch(e){
        updateToQuizzes.undo();
    }

  },
}),
    // delete quiz
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let updateToQuizzes = dispatch(
          APISlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
             const indexToRemove = draft.findIndex(v => v.id == id);
             if(indexToRemove !== -1){
              draft.splice(indexToRemove, 1);
             }
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
            updateToQuizzes.undo();
        }
        
      },
    }),
  }),
});

export const {
 useGetQuizQuery,
 useGetQuizzesQuery,
 useAddQuizMutation,
 useEditQuizMutation,
 useDeleteQuizMutation,
 useGetVideoQuizQuery
} = QuizzesApi;
