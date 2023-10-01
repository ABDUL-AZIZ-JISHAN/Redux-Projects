import axios from "../../../utils/axiosInstance";

const getRelatedPosts = async (id , tags) =>{

    const queryParams = tags.length > 0 ? tags.map(tag =>{
        return `tags_like=${tag}`;
    }).join("&") + `&id_ne=${id}` : `id_ne=${id}`;
  const response = await axios.get(`/blogs?${queryParams}`);
  return response.data;
}

export default getRelatedPosts;