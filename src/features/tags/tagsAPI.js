import axios from "../../utils/axios";

const getTags = async () =>{
    const tags = await axios.get("/tags");
    return await tags.data;
}

export default getTags;
