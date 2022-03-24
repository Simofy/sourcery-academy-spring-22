import { useCallback, useEffect, useState } from "react";
import ObjectComponent from "./ObjectComponent";

export default function StateComponent() {
  const [totalString, setTotalString] = useState("");
  console.log('StateComponent rendered');


  const handleSubmit = useCallback(function handleSubmit(event) {
    event.preventDefault();
    const {
      target: {
        ["add-character"]: input
      }
    } = event;
    // console.log(input.value);
    const {value} = input;
    setTotalString((oldTotalString) => oldTotalString + value);
    // setTotalString(value);
    input.value = '';
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="add-character" maxLength={1} />
          <button type="submit">Add</button>
        </form>
      </div>
      {totalString}
      {totalString === 'a' ? <ObjectComponent /> : null}
    </div>
  );
}
