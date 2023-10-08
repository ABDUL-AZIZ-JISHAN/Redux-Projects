import Navbar from "../components/navbar";
import VideoSidebar from "../components/videoSidebar";
import Video from "../components/video";
import { useGetVideosQuery } from "../redux/features/videos/videosApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
   const {id} = useParams();
  const {data: videos} = useGetVideosQuery();

  // Use useState to manage the video state
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedVideo = videos?.find((v) => v.id === parseInt(id));
      if (selectedVideo) {
        setVideo(selectedVideo);
      } else {
        setVideo(videos?.[0]);
      }
    } else {
      setVideo(videos?.[0]);
    }
  }, [id, videos]);

  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <Video video={video} />
            <VideoSidebar videos={videos} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
