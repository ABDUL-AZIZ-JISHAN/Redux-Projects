import axios from "../../../utils/axiosInstance";

export const getJobs = async (id) => {
  let res;
  if (id) {
     res = await axios.get(`/jobs/${id}`);
  } else {
    res = await axios.get("/jobs");
  }
  return res.data;
};

export const addJobs = async (data) => {
  let res = await axios.post("/jobs", data);
  return res.data;
};

export const removeJobs = async (id) => {
  let res = await axios.delete(`/jobs/${id}`);
  return res;
};

export const editJobs = async (id, data) => {
  let res = await axios.put(`/jobs/${id}`, data);
  return res.data;
};
