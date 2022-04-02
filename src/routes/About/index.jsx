import { Route, Routes } from "react-router-dom";
import DisplayName from "./DisplayName";

function About() {
  return (
    <div>
      <Routes>
        <Route index element="Type name" />
        <Route path=":name" element={<DisplayName />} />
      </Routes>
    </div>
  );
}

export default About;
