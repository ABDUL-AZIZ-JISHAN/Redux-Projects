import axios from "../../utils/axios";

export const getVideos = async (queryParams) => {
    const response = await axios.get(`/videos?${queryParams}`);
    return response.data;
};
