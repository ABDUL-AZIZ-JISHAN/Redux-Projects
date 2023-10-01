


import axios from "../../../utils/axiosInstance";

const toggleSavedAction = async (id) =>{
    const post = await axios.get(`/blogs/${id}`);
  const response = await axios.patch(`/blogs/${id}`, {...post.data, isSaved: !post.data.isSaved});
  return response.data;
}

export default toggleSavedAction;

