import { Link } from "react-router-dom";
import { useGetVideoQuizQuery } from "../redux/features/quzzes/quizzesApi";
import { useEffect, useState } from "react";
import { useGetVideoAssignmentQuery } from "../redux/features/assignments/assignmentApi";
import AssignmentModal from "./assignmentModal";

const Video = ({ video }) => {
  const { createdAt, id, title, url, description } = video || {};
  const [isFetch, setIsFetch] = useState(true);
  const { data: quiz } = useGetVideoQuizQuery(id, { skip: isFetch });
  const { data: assignment } = useGetVideoAssignmentQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: isFetch,
  });
  const [modalActive, setModalActive] = useState(false);
  useEffect(() => {
    if (id) {
      setIsFetch(false);
    }
  }, [id]);

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <iframe
        autoPlay={true}
        width="100%"
        className="aspect-video"
        src={url}
        title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
          {title}
        </h1>
        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
          Uploaded on {createdAt}
        </h2>
        <div className="flex gap-4">
          {assignment?.length === 0 && <h2>No assignment available.</h2>}
          {assignment?.[0] && (
            <button
              onClick={() => setModalActive(!modalActive)}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              Assignment
            </button>
          )}
          {quiz?.length === 0 && <h2>No Quiz available.</h2>}
          {quiz?.[0] && (
            <Link
              to={`/quiz/${quiz?.[0].id}`}
              state={video}
              className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
            >
              Get Quiz
            </Link>
          )}
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">{description}</p>
      </div>
      <AssignmentModal setActive={setModalActive} assignment={assignment?.[0]} active={modalActive} />
    </div>
  );
};

export default Video;
