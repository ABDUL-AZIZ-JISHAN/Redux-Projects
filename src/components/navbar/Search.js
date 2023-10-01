import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
    const dispatch = useDispatch();
    const {search} = useSelector(state => state.filter);

    const [value, setValue] = useState(search);


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(searched(value));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
            />
        </form>
    );
}
