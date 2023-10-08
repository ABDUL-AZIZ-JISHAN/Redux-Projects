import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { useAddAssignmentMarkMutation } from '../redux/features/assingmentMark/assignmentMarkApi';
import Error from '../components/error'
const AssignmentModal = ({setActive,active, assignment}) => {
    const {title,id, totalMark, video_title} = assignment || {};
   const {user}  = useSelector(state => state.user.user);
   const [addAssignmentMark, {isSuccess, isError}] = useAddAssignmentMarkMutation()
   const [repo, setRepo] = useState("");


    const date = new Date(); 
const year = date.getFullYear();
const month = date.getMonth() ;
const day =date.getDate();
const formattedDate = `${year}-${month}-${day}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAssignmentMark = {
            id: uniqid(),
            status: "pending",
            repo_link: repo,
            totalMark: Number(totalMark),
            title,
            mark: 0,
            createdAt: formattedDate,
            assignment_id: id,
            student_name: user.name,
            student_id: user.id
        }
        addAssignmentMark(newAssignmentMark);
    }

    useEffect(()=>{
      if(isSuccess){
        setActive(!active);
      }
    },[isSuccess])
    return (
        <div className={active ?'assignment-modal active': 'assignment-modal'}>
            <div onClick={()=>setActive(!active)} style={{textAlign:"right", cursor: "pointer", marginBottom: "30px"}}>Cancel</div>
            <h2 className='title'>{video_title}</h2>
            <hr />
            <h2 className="name">Assignment Topic: {title} <br />
            <span>Total Mark: {totalMark}</span></h2>
            <form onSubmit={handleSubmit} >
                <div className="content">
                <label>Repo Link:</label>
                <input placeholder='https:github.com/user/assignment' value={repo} onChange={(e) => setRepo(e.target.value)}  type="text" className='w' />
                </div>
                <button type="submit">Submit Assignment</button>
            </form>
            {isError && <Error/>}
        </div>
    );
}

export default AssignmentModal;
