import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addToFilter, removeFromFilter} from '../redux/features/projects/projectSlice.js';

const SingleProject = ({project}) => {
  const { projectName, colorClass} = project || {}


  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(true);


  useEffect(()=>{
    if(isChecked){
      dispatch(addToFilter(projectName))
    }else{
      dispatch(removeFromFilter(projectName))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isChecked])
  return (
    <div className="checkbox-container">
      <input type="checkbox" className={colorClass} checked={isChecked} onChange={(e)=> setIsChecked(e.target.checked)} />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default SingleProject;
