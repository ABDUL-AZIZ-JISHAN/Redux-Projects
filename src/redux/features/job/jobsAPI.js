import axios from "../../../utils/axiosInstance";

export const getJobs = async () =>{
   let res = await axios.get("/jobs");
   return res.data;
};

export const addJobs = async (data) =>{
    let res = await axios.post("/jobs", data);
    return res.data;
};

export const removeJobs = async (id) => {
    let res = await axios.delete("/jobs", id);
    return res.data;
};

export const editJobs = async (id, data) => {
    let res = await axios.put(`/jobs/${id}`, data);
    return res.data;
};