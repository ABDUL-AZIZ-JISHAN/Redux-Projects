import axios from "../../../utils/axiosInstance";

const getBlog = async (id) =>{
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
}

export default getBlog;