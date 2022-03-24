export default function EventComponent() {
  return (
    <button
      onClick={(event) => {
        console.log("clicked", event.target.innerHTML);
      }}
    >
      Click me!
    </button>
  );
}
