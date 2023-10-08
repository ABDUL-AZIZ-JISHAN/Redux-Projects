import IsUserExist from "../utils/isUserExist";
import { useNavigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
    const navigate = useNavigate();
      const user = IsUserExist();

    return user?.password  ? navigate("/") : children
  
};

export default PublicRoutes;
