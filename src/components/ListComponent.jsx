import { useEffect, useState } from "react";

const list = [10, 10, 10];

function ListItem({ value }) {
  const [newValue] = useState(value);
  return <li>{newValue}</li>;
}

export default function ListComponent() {
  const [newList, setNewList] = useState(list);
  console.log("rendered");
  useEffect(() => {
    console.log("setNewList");
    setNewList([20, 20, 20]);
  }, []);

  return (
    <ul>
      {newList.map((item, index) => (
        <ListItem value={item} key={index}/>
      ))}
    </ul>
  );
}
