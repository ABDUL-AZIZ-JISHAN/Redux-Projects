import { useEffect, useState } from "react";
import uniqid from "uniqid";
import {
  useAddVideosMutation,
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../redux/features/videos/videosApi";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../components/error";

export default function EditVideoForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editVideo, { isSuccess: uploadSuccess, isError: uploadError }] =
    useEditVideoMutation();
  const {
    data: videoData,
    isSuccess: getSuccess,
    isError,
    isLoading,
  } = useGetVideoQuery(id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [createdAt, setCratedAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = {
      id,
      title,
      description,
      url,
      duration,
      createdAt,
      views,
    };
    editVideo(updatedVideo);
  };
  useEffect(() => {
    if (uploadSuccess) {
      navigate("/admin/videos");
    }
    if (getSuccess && videoData.title) {
      setCratedAt(videoData.createdAt);
      setViews(videoData.views);
      setTitle(videoData.title);
      setDescription(videoData.description);
      setDuration(videoData.duration);
      setUrl(videoData.url);
    }
  }, [getSuccess, videoData, uploadSuccess]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="mb-8 text-center text-4xl font-bold color-white">
        Edit Video
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
            placeholder="Debounce Function in JavaScript - JavaScript Job Interview question"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Description
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="In this video, I have explained about the debounce function in JavaScript. This is a common question interviewers ask at Job Interviews. If you watch this video carefully, you will understand what is debounce and how to handle it with custom debounce function."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Url
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="https://www.youtube.com/watch?v=lkIFF4maKMU&ab_channel=Fireship"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Views
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="10M"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Duration
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="10:12"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Created At
          </label>
          <input
            type="date"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="10:12"
            value={createdAt}
            onChange={(e) => setCratedAt(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Video
          </button>
        </div>
      </form>
      {(isError || uploadError) && <Error />}
    </div>
  );
}
