



// Context form my user

import { createContext } from "react";


const UserContext = createContext({
  userId: undefined,
  name: undefined,
  active: false,
  setNewName: () => {}
});

export default UserContext;