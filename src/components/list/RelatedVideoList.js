import { useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideo/relatedVideoSlice";
import { useParams } from "react-router-dom";

export default function RelatedVideoList() {
    const {videoId} = useParams();
    const dispatch = useDispatch();
    const {relatedVideos, isLoading, error, isError} = useSelector(state => state.relatedVideos);
    useEffect(()=>{
        dispatch(fetchRelatedVideos(videoId))
    },[dispatch, videoId]);
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
           {!isLoading && !isError && relatedVideos.map((relatedVideo) =>{
                return <RelatedVideoListItem key={relatedVideo.id} video={relatedVideo} />
            })}

            {isLoading && <h2>Fetching videos...</h2>}
            {isError && <h2>{error}</h2>}
            {relatedVideos.length === 0 && <h2>No related videos available.</h2>}
        </div>
    );
}
