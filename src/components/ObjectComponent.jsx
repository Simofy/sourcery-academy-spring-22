import { useEffect, useState } from "react";

export default function ObjectComponent() {
  const [obj, setObj] = useState({
    name: "Agurkas",
    color: "green",
    increment: 1,
  });

  useEffect(() => {
    const currentIncrement = obj.increment;
    const timeoutId = setTimeout(() => {
      console.log('there: ', currentIncrement)
    }, 1000)
    // console.log("mounted", currentIncrement);
    return () => {
      clearTimeout(timeoutId);
      // console.log("destroyed", currentIncrement);
    };
  }, [obj.increment]);

  return (
    <div>
      <ol>
        <li>{obj.name}</li>
        <li>{obj.color}</li>
        <li>{obj.increment}</li>
      </ol>
      <button
        onClick={() => {
          setObj({ ...obj, increment: obj.increment + 1 });
        }}
      >
        Increment obj
      </button>
    </div>
  );
}
