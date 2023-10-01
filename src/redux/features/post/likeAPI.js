import axios from "../../../utils/axiosInstance";

const incrementLikeAction = async (id) =>{
    const post = await axios.get(`/blogs/${id}`);
    const response = await axios.patch(`/blogs/${id}`, {...post.data, likes: post.data.likes + 1});
    return response.data;
}

export default incrementLikeAction;