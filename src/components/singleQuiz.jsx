
const SingleQuiz = () => {
    return (
        <div className="quiz">
        <h4 className="question">Quiz 2 - Which of the following is an example of a situation where you would use the
          Debounce function?</h4>
        <form className="quizOptions">
          {/* Option 1 */}
          <label htmlFor="option1_q2" className="color-white">
            <input  type="checkbox" id="option1_q2" />
            A search bar where the results are displayed as you type.
          </label>
          {/* Option 2 */}
          <label htmlFor="option2_q2">
            <input type="checkbox" id="option2_q2" />
            A button that performs an action when clicked.
          </label>
          {/* Option 3 */}
          <label htmlFor="option3_q2">
            <input type="checkbox" id="option3_q2" />
            An animation that plays when a user hovers over an element.
          </label>
          {/* Option 4 */}
          <label htmlFor="option4_q2">
            <input type="checkbox" id="option4_q2" />
            All of the above.
          </label>
        </form>
      </div>
    );
}

export default SingleQuiz;
