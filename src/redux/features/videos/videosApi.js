/* eslint-disable eqeqeq */
import { APISlice } from "../api/APISlice";

export const videosApi = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all videos
    getVideos: builder.query({
      query: () => ({
        url: `/videos`,
      }),
      keepUnusedDataFor: 300,
      providesTags: ['Videos']
    }),
     // get single videos
     getVideo: builder.query({
      query: (id) => ({
        url: `/videos/${id}`,
      }),
    }),
    // add new videos
    addVideos: builder.mutation({
      query: (data) => ({
        url: `/videos`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        let updateToVideos = dispatch(
          APISlice.util.updateQueryData("getVideos", undefined, (draft) => {
            draft.push(data);
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
          updateToVideos.undo();
        }

      },
    }),
 // edit video
 editVideo: builder.mutation({
  query: (data) => ({
    url: `/videos/${data.id}`,
    method: "PATCH",
    body: data,
  }),
  async onQueryStarted(data, { queryFulfilled, dispatch }) {
    let updateToVideos = dispatch(
      APISlice.util.updateQueryData("getVideos", undefined, (draft) => {
        const indexToRemove = draft.findIndex(v => v.id == data.id);
        if(indexToRemove !== -1){
         draft[indexToRemove] = data;
        }
      })
    );

    try{
      await queryFulfilled;
    }catch(e){
      updateToVideos.undo();
    }

  },
}),
    // delete videos
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "Delete",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let updateToVideos = dispatch(
          APISlice.util.updateQueryData("getVideos", undefined, (draft) => {
             const indexToRemove = draft.findIndex(v => v.id == id);
             if(indexToRemove !== -1){
              draft.splice(indexToRemove, 1);
             }
          })
        );

        try{
          await queryFulfilled;
        }catch(e){
          updateToVideos.undo();
        }
        
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useEditVideoMutation,
  useDeleteVideoMutation,
  useAddVideosMutation,
} = videosApi;
