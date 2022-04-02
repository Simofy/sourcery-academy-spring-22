// Represent text color

import { createContext } from "react";

const ColorContext = createContext({
  color: "red",
  type: 'default'
});

export default ColorContext;
