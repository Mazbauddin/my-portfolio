import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/AuthProvider";

const useAuthHooks = () => {
  const allContext = useContext(AuthContext);
  return allContext;
};

export default useAuthHooks;
