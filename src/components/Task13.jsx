import { useMemo, useState } from "react";

export function randomHexColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

export default function Task13() {
  const background = useMemo(() => randomHexColor(), []);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="task-13"
      style={{
        background,
      }}
      onClick={() => {
        setClicked(true);
        console.log("clicked");
      }}
    >
      {clicked && (
        <>
          <Task13 />
          <Task13 />
          <Task13 />
          <Task13 />
        </>
      )}
    </div>
  );
}
