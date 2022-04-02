import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context";

export default function DisplayName() {
  const { name: displayName } = useParams();
  const [newName, setNewName] = useState("");
  const { name, setNewName: setNewNameMethod } = useContext(UserContext);
  return (
    <div>
      About: {name} {displayName}
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button
        onClick={() => {
          setNewNameMethod(newName);
        }}
      >
        Save
      </button>
    </div>
  );
}
