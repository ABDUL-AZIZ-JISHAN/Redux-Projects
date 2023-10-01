import axios from "../../utils/axios";

export const getRelatedVideos = async (id) => {
    const video = await axios.get(`/videos/${id}`);
    const {tags} = await video.data;

    let queryParams =  tags.length > 0 ?
    tags.map(tag => {
        return `tags_like=${tag}`
    }).join("&") + `&id_ne=${id}` : `id_ne${id}`;

    const relatedVideosRes = await axios.get(`/videos?${queryParams}`);
 
    return relatedVideosRes.data;
};
