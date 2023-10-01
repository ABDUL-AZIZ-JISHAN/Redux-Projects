import { useDispatch, useSelector } from "react-redux";
import { addTags, removeTags } from "../../features/filter/filterSlice";
export default function Tag({tag =''}) {
    const dispatch = useDispatch();
    const {tags} = useSelector(state => state.filter);

    const isSelected = tags.includes(tag.title) ? true : false;
    const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

    const handleSelect = ()=>{
        if(isSelected){
            dispatch(removeTags(tag.title))
        }else{
            dispatch(addTags(tag.title));
        }
    }

    return (
        <div onClick={handleSelect} className={style}>
            {tag.title}
        </div>
    );
}


