import Login from "../pages/login";
import IsUserExist from "./../utils/isUserExist";

const PrivateRoutes = ({ children }) => {
      const user = IsUserExist();

    return user !== undefined  ? children : <Login/>;
  
};

export default PrivateRoutes;
