export default function HandleClear({ onSetListArr }) {
  function handleClear() {
    onSetListArr([]);
  }
  return (
    <span
      className="clear"
      onClick={handleClear}
      style={{ color: "hsl(236, 9%, 61%)" }}
    >
      Clear Completed
    </span>
  );
}
