import { useContext } from "react";
import ColorContext from "../../context/ColorContext";

export default function Login() {
  const { color } = useContext(ColorContext);

  return (
    <div
      style={{
        color,
      }}
    >
      login
    </div>
  );
}
