import { useEffect, useState } from "react";
import uniqid from "uniqid";
import {
  useGetVideosQuery,
} from "../../redux/features/videos/videosApi";
import { useNavigate } from "react-router-dom";
import Error from "../../components/error";
import { useAddAssignmentMutation } from "../../redux/features/assignments/assignmentApi";

export default function AddAssignmentForm() {
  const navigate = useNavigate();

  const {data: videos, isError} = useGetVideosQuery();
  const [addAssignment, {isSuccess, isLoading , isError: uploadError}] = useAddAssignmentMutation();
  const [title, setTitle] = useState("");
  const [totalMark, setTotalMark] = useState("");
  const [videoInfo, setVideoInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const {video_id , video_title} = JSON.parse(videoInfo)
    const newAssignment = {
       id: uniqid(),
       title,
       totalMark,
       video_id ,
        video_title
    };
    addAssignment(newAssignment);
  };
  useEffect(() => {
    if(isSuccess){
        navigate("/admin/assignment")
    }
  }, [isSuccess]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="mb-8 text-center text-4xl font-bold color-white">
        Add Assignment
      </h3>
      <form onSubmit={handleSubmit} className=" mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Title
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="Assignment 1 - Implement Debounce Function"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            TotalMark
          </label>
          <input
            type="number"
            min="0"
            max="100"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="100"
            value={totalMark}
            onChange={(e) => setTotalMark(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            SelectVideo
          </label>
          <select  className="border bg-black-400 rounded w-full p-2"
            required value={videoInfo} onChange={(e)=> setVideoInfo(e.target.value)}>
          <option value="">Select Video</option>
               {videos?.map(video => {
                const value = {video_id: video.id, video_title: video.title}
                return <option value={JSON.stringify(value)} key={video.id}>{video.title}</option>
               })}
          </select>
        </div>
        <div className="text-center">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Assignment
          </button>
        </div>
      </form>
      {(isError || uploadError) && <Error />}
    </div>
  );
}
