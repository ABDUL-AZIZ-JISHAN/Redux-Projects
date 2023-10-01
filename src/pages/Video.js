import { useEffect } from "react";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";

export default function Video() {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {!isLoading && !isError && (
              <>
                <VideoPlayer />
                <VideoDescription  />
              </>
            )}
            {isLoading && <h2>Fetching Data</h2>}
            {isError && <h2>{error}</h2>}
          </div>
          <RelatedVideoList/>
        </div>
      </div>
    </section>
  );
}
