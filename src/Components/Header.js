export default function Header({ isLight, setIsLight }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
      id="header"
    >
      <h1>TODO</h1>
      <img
        src={isLight ? "./images/icon-moon.svg" : "./images/icon-sun.svg"}
        alt="toggle-btn"
        onClick={() => setIsLight(!isLight)}
        className="pb-3 pe-3"
      />
    </div>
  );
}
