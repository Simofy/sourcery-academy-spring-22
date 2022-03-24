export default function ConditionalComponent({ value }) {
  return (
    <span
      style={{
        backgroundColor: value ? "green" : "red",
      }}
    >
      {value ?? ': number'}
    </span>
  );
}
