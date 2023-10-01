import { useDispatch, useSelector } from "react-redux";
import VideoGridItem from "./VideoGridItem";
import { useEffect } from "react";
import { fetchVideos } from "../../features/videos/videosSlice";

export default function VideGrid() {
    const dispatch = useDispatch();
    const {videos, isLoading, isError, error} = useSelector(state => state.videos);
 
    const {tags, search } = useSelector(state => state.filter);

    useEffect(()=>{
        dispatch(fetchVideos({tags, search}))
    },[dispatch, tags, search]);

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                   {videos.length === 0 && !isLoading && !isError && <div className="col-span-12">No videos available.</div> }
                   {isLoading && <div className="col-span-12">Fetching Videos...</div> }
                   {isError && <div className="col-span-12">{error}</div> }
                   {videos.length !== 0 && !isLoading && !isError &&  videos.map((video)=> {return <VideoGridItem video={video} key={video.id}/>})}
                </div>
            </section>
        </section>
    );
}
