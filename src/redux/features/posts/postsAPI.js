import axios from "../../../utils/axiosInstance";
const getPosts = async () =>{
  const response = await axios.get("/blogs");
  return response.data;
}

export default getPosts;