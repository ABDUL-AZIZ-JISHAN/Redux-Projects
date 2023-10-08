
import { useEffect, useState } from "react";
import uniqid from "uniqid";
import { useGetVideosQuery } from "../../redux/features/videos/videosApi";
import { useNavigate } from "react-router-dom";
import Error from "../../components/error";
import { useAddQuizMutation } from "../../redux/features/quzzes/quizzesApi";

export default function AddQuizForm() {
  const navigate = useNavigate();

  const { data: videos, isError } = useGetVideosQuery();
  const [addQuiz, { isSuccess, isLoading, isError: uploadError }] =
    useAddQuizMutation();
  const [question, setQuestion] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [selectedAns, setSelectedAns] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { video_id, video_title } = JSON.parse(videoInfo);
    const newQuiz = {
      id: uniqid(),
      video_id,
      video_title,
      question,
      options: options.map((option, index) => ({
        id: index + 1,
        option,
        isCorrect: index + 1 === parseInt(selectedAns),
      })),
    };
    addQuiz(newQuiz);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/quizzes");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="mb-8 text-center text-4xl font-bold color-white">
        Add Quiz
      </h3>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Question
          </label>
          <input
            type="text"
            className="border bg-black-400 rounded w-full p-2"
            required
            placeholder="Assignment 1 - Implement Debounce Function"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Select Video
          </label>
          <select
            className="border bg-black-400 rounded w-full p-2"
            required
            value={videoInfo}
            onChange={(e) => setVideoInfo(e.target.value)}
          >
            <option value="">Select Video</option>
            {videos?.map((video) => {
              const value = { video_id: video.id, video_title: video.title };
              return (
                <option value={JSON.stringify(value)} key={video.id}>
                  {video.title}
                </option>
              );
            })}
          </select>
        </div>
        {/* Use a map to generate input fields for options */}
        {options.map((option, index) => (
          <div className="mb-4" key={index}>
            <label
              htmlFor={`option-${index + 1}`}
              className="block text-gray-100 mb-2 font-semibold"
            >
              Option {index + 1}
            </label>
            <input
              type="text"
              id={`option-${index + 1}`}
              className="border bg-black-400 rounded w-full p-2"
              required
              placeholder={`Enter option ${index + 1}`}
              value={option}
              onChange={(e) =>
                setOptions((prevOptions) => {
                  const updatedOptions = [...prevOptions];
                  updatedOptions[index] = e.target.value;
                  return updatedOptions;
                })
              }
            />
          </div>
        ))}
        {/* Use radio buttons for selecting the answer */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-100 mb-2 font-semibold"
          >
            Select Ans
          </label>
          {options.map((option, index) => (
            <label key={index} className="block text-gray-100">
              <input
                type="radio"
                name="selectedAns"
                value={index + 1}
                checked={selectedAns === `${index + 1}`}
                onChange={(e) => setSelectedAns(e.target.value)}
                required
              />
              {` Option ${index + 1}`}
            </label>
          ))}
        </div>
        <div className="text-center">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Quiz
          </button>
        </div>
      </form>
      {(isError || uploadError) && <Error />}
    </div>
  );
}
