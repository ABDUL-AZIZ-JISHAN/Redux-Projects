import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobs, editJobs, removeJobs, getJobs  } from "./jobsAPI"



const fetchJobs = createAsyncThunk("jobs/fetchJobs", async ()=>{
    let jobs = await getJobs();
    return jobs;
});

 const deleteJob = createAsyncThunk("jobs/deleteJobs", async (id)=>{
    let job = await removeJobs(id);
    return job;
});

 const updateJob = createAsyncThunk("jobs/updateJob", async ({id, data})=>{
    let job = await editJobs(id, data);
    return job;
});

 const postJob = createAsyncThunk("jobs/postJob", async ({data})=>{
    let job = await addJobs(data);
    return job;
});

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: ''
}

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    extraReducers: (builders) => {
          builders
        //   reducers for get jobs
          .addCase(fetchJobs.pending, (state , action)=> {
            state.isLoading = true;
            state.isError = false;
            state.error = false;
            state.jobs = [];
          })
          .addCase(fetchJobs.rejected, (state , action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload?.error;
            state.jobs = [];
          })
          .addCase(fetchJobs.fulfilled, (state , action)=> {
            state.isLoading = false;
            state.isError = false;
            state.error = false;
            state.jobs = action.payload;
          })
        //    //   reducers for delete jobs
           .addCase(deleteJob.pending, (state , action)=> {
            state.isLoading = true;
            state.isError = false;
            state.error = false;
            state.jobs = [];
          })
          .addCase(deleteJob.rejected, (state , action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload?.error;
            state.jobs = [];
          })
          .addCase(deleteJob.fulfilled, (state , action)=> {
            state.isLoading = false;
            state.isError = false;
            state.error = false;
            state.jobs = state.jobs.filter(job => job.id === action.payload.id);
          })
        //     //   reducers for add jobs
            .addCase(postJob.pending, (state , action)=> {
                state.isLoading = true;
                state.isError = false;
                state.error = false;
                state.jobs = [];
              })
              .addCase(postJob.rejected, (state , action)=> {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload?.error;
                state.jobs = [];
              })
              .addCase(postJob.fulfilled, (state , action)=> {
                state.isLoading = false;
                state.isError = false;
                state.error = false;
                state.jobs.push(action.payload);
              })
           //   reducers for update jobs
           .addCase(updateJob.pending, (state , action)=> {
            state.isLoading = true;
            state.isError = false;
            state.error = false;
            state.jobs = [];
          })
          .addCase(updateJob.rejected, (state , action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload?.error;
            state.jobs = [];
          })
          .addCase(updateJob.fulfilled, (state , action)=> {
            state.isLoading = false;
            state.isError = false;
            state.error = false;
            const indexOf = state.jobs.indexOf(action.payload.id);
            state.jobs[indexOf] = action.payload;
          })

    }

});

export default jobSlice.reducer;
export {postJob, updateJob, deleteJob, fetchJobs} = jobSlice.actions;