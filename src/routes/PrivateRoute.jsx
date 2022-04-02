import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context";


export default function PrivateElement({ children }) {
  const user = useContext(UserContext);
  if (user && user.active) {
    return children;
  }
  return <Navigate to="/" />;
}
