import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/users/userSlice";
import getAuthUser from './getAuthUser';

const IsUserExist = () => {
    const dispatch = useDispatch();
    const user = getAuthUser();
    useEffect(()=> {
        dispatch(addUser(user));
    },[user,dispatch]);

  return  user?.accessToken ? user : undefined;
}

export default IsUserExist;
