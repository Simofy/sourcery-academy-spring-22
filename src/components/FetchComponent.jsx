import { useCallback, useEffect, useMemo, useState } from "react";

export default function FetchComponent() {
  const [limit, setLimit] = useState(0);
  const [list, setList] = useState([]);
  // useEffect();

  const handleSubmit = useCallback(function handleSubmit(event) {
    event.preventDefault();
    const {
      target: { limit: input },
    } = event;
    const { value } = input;
    setLimit(value);
    input.value = "";
  }, []);

  useEffect(() => {
    console.log(limit);
    if (limit) {
      fetch(`https://simutis.dev/api/generate-shopping-cart?limit=${limit}`)
        .then((response) => response.json())
        .then(setList);
    }
  }, [limit]);

  const generatedList = useMemo(() => list.map(({ name, id }) => (
    <li key={id}>{name}</li>
  )), [list])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="limit" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {generatedList}
      </ul>
    </div>
  );
}
