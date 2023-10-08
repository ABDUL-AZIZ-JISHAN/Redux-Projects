import Navbar from "../../components/navbar";
import { useEditAssignmentMarkMutation, useGetAssignmentMarksQuery } from "../../redux/features/assingmentMark/assignmentMarkApi.js";
import Loading from "../../components/loading";
import Error from "../../components/error";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const AssignmentMark = () => {
  const {
    data: assignmentMarks,
    isLoading,
    isError,
  } = useGetAssignmentMarksQuery();
const [editAssignmentMark, {data: uploadData,isSuccess: uploadSuccess, isError: uploadError}] = useEditAssignmentMarkMutation();
  const pending = assignmentMarks?.filter((ass) => ass.status === "pending");
  const published = assignmentMarks?.filter(
    (ass) => ass.status === "published"
  );
  const navigate = useNavigate();
  const [mark, setMark] = useState(100);

  const handleMarked = (value) => {
    const updateAssignment = {
      ...value,
      mark: Number(mark),
      status: "published"
    }
    editAssignmentMark(updateAssignment);
  };


  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <ul className="assignment-status">
              <li>
                Total <span>{assignmentMarks?.length}</span>
              </li>
              <li>
                Pending <span>{pending?.length}</span>
              </li>
              <li>
                Mark Sent <span>{published?.length}</span>
              </li>
            </ul>
            <div className="overflow-x-auto mt-4">
              {isLoading && <Loading title="fetching Marks..." />}
              <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th className="table-th">Assignment</th>
                    <th className="table-th">Date</th>
                    <th className="table-th">Student Name</th>
                    <th className="table-th">Repo Link</th>
                    <th className="table-th">Mark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-600/50">
                  {assignmentMarks?.map((assignmentMark) => {
                    return (
                      <tr key={assignmentMark.id}>
                        <td className="table-td">{assignmentMark.title}</td>
                        <td className="table-td">{assignmentMark.createdAt}</td>
                        <td className="table-td">
                          {assignmentMark.student_name}
                        </td>
                        <td className="table-td">{assignmentMark.repo_link}</td>
                        <td className="table-td input-mark">
                          {assignmentMark.status === "pending" && (
                            <input
                              type="number"
                              onChange={(e)=> setMark(e.target.value)}
                              value={mark}
                              max={assignmentMark.totalMark}
                            />
                          )}
                          {assignmentMark.status === "published" && (
                            <h2>{assignmentMark.mark} </h2>
                          )}
                          {assignmentMark.status === "pending" && (
                            <svg
                              onClick={() => handleMarked(assignmentMark)}
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                  {(isError || uploadError) && <Error />}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentMark;
