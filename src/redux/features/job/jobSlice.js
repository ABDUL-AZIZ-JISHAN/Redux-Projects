import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobs, editJobs, removeJobs, getJobs  } from "./jobsAPI"



export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (id)=>{
    let jobs = await getJobs(id);
    return jobs;
});

export const deleteJob = createAsyncThunk("jobs/delteJobs", async (id)=>{
    let response = await removeJobs(id);
    if(response.status === 200) {
      return  id;
    }
});

export const updateJob = createAsyncThunk("jobs/updateJob", async ({id, data})=>{
    let job = await editJobs(id, data);
    return job;
});

export const postJob = createAsyncThunk("jobs/postJob", async (data)=>{
    let job = await addJobs(data);
    return job;
});

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: '',
    filteredJobs: [],
}

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
      resetFilterJobs: (state) => {
        state.filteredJobs = [];
      },
      internJobs: (state) => {
        state.filteredJobs = state.jobs.filter((job) => job.type === "Internship");
      },
      remoteJobs: (state) => {
        state.filteredJobs = state.jobs.filter((job) => job.type === "Remote");
      },
      fullTimeJobs: (state) => {
        state.filteredJobs = state.jobs.filter((job) => job.type === "Full Time");
      },
    },
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
          })
          .addCase(deleteJob.rejected, (state , action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload?.error;
          })
          .addCase(deleteJob.fulfilled, (state , action)=> {
            state.isLoading = false;
            state.isError = false;
            state.error = false;
            state.jobs = state.jobs.filter((job) => job.id !== action.payload);
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
export const {fullTimeJobs, internJobs, remoteJobs, resetFilterJobs} = jobSlice.actions;