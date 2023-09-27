import HandleClear from "./HandleClear";

export default function Lists({
  listArr,
  isMobile,
  onHandleComplete,
  onSetListArr,
  filteredItem,
  isLight,
  isloading,
}) {
  function handleDelete(id) {
    onSetListArr((prev) => prev.filter((pre) => pre.id !== id));
  }

  return (
    <ul
      className="lists w-100 mt-5"
      style={{
        background: `${isLight ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)"}`,
      }}
    >
      {isloading && <li>Loading.....</li>}
      {!isloading &&
        filteredItem.map((prev) => (
          <List
            description={prev.title}
            key={prev.id}
            checked={prev.completed}
            id={prev.id}
            onHandleComplete={onHandleComplete}
            onHandleDelete={handleDelete}
            isLight={isLight}
          />
        ))}
      {isMobile && listArr.length ? (
        <div
          className="d-flex justify-content-between p-3 align-items-center footer mb-4"
          style={{
            background: `${isLight ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)"}`,
          }}
        >
          <span
            style={{
              color: "hsl(236, 9%, 61%)",
            }}
          >
            <span>
              {listArr.filter((prev) => prev.completed === false).length}{" "}
            </span>
            items left
          </span>

          <HandleClear onSetListArr={onSetListArr} isLight={isLight} />
        </div>
      ) : (
        ""
      )}
    </ul>
  );
}
function List({
  description,
  checked,
  id,
  onHandleComplete,
  onHandleDelete,
  isLight,
}) {
  let title = [...description];
  title = title.splice(0, 28);
  title = title.join("");
  return (
    <li
      style={{
        borderColor: `${isLight ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)"}`,
      }}
    >
      <span
        className="link-check me-3"
        style={{
          background: `${
            checked
              ? "url(./images/icon-check.png) no-repeat center center"
              : ""
          }`,
          borderColor: `${
            isLight ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)"
          }`,
        }}
        onClick={() => onHandleComplete(id)}
      ></span>
      <span
        className="me-auto des"
        style={{
          textDecoration: `${checked ? "line-through" : ""}`,
          color: `${
            isLight && !checked
              ? "hsl(235, 21%, 11%)"
              : isLight && checked
              ? "hsl(234, 39%, 85%)"
              : !isLight && checked
              ? "hsl(233, 14%, 35%)"
              : "hsl(234, 39%, 85%)"
          }`,
        }}
        onClick={() => onHandleComplete(id)}
      >
        {title}
      </span>
      <img
        className="btn"
        src="./images/icon-cross.svg"
        alt="close"
        onClick={() => onHandleDelete(id)}
      />
    </li>
  );
}
