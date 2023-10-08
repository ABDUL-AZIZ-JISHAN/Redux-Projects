import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetVideoQuizQuery } from '../redux/features/quzzes/quizzesApi';

const Quiz = () => {
  const { id } = useParams();
  const { data: quiz } = useGetVideoQuizQuery(id);

  const [checked, setChecked] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(-1);
    console.log(checked);
  }
 
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="mb-8">
            <h1 className="text-2xl color-white font-bold">
              Quizzes for {quiz?.[0].video_title}
            </h1>
          </div>
          {quiz && (
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="quiz">
                <h4 className="question">{quiz?.[0].question}</h4>
                <div className="quizOptions">
                  {quiz?.[0].options.map((option, ind) => (
                    <label key={option.id}>
                      <input type="checkbox"  onChange={() => setChecked(option.id)} />
                      {`${ind + 1} - ${option.option}`}
                    </label>
                  ))}
                </div>
                <button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95">
            Submit
          </button> 
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
