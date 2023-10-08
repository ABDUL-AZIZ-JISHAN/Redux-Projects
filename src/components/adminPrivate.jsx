import AdminLogin from "../pages/admin/adminLogin";
import IsUserExist from "./../utils/isUserExist";

const AdminPrivate = ({children}) => {
      const user = IsUserExist();
      return user.user.role === "admin"  ? children : <AdminLogin/>
}

export default AdminPrivate;
