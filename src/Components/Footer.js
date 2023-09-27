import { useState } from "react";
import HandleClear from "./HandleClear";

export default function Footer({
  listArr,
  onSetListArr,
  isMobile,
  onHandleFiltered,
  isLight,
}) {
  const [isActive, setIsActive] = useState("all");
  function handleFilter(e) {
    let target = e.target.attributes.id.value;
    setIsActive(target);
    onHandleFiltered(e);
  }
  return (
    <>
      {listArr.length ? (
        <div
          className="d-flex justify-content-around align-items-center footer mb-4"
          style={{
            background: `${isLight ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)"}`,
          }}
        >
          {!isMobile && (
            <span style={{ color: "hsl(236, 9%, 61%)" }}>
              <span>{listArr.filter((prev) => !prev.completed).length}</span>
              items left
            </span>
          )}
          <div id="menus">
            <span
              onClick={(e) => handleFilter(e)}
              className={`flt btn border-0 me-4 ${
                isActive === "all" ? "active" : ""
              }`}
              id="all"
              style={{
                color: `hsl(236, 9%, 61%)`,
              }}
            >
              All
            </span>
            <span
              onClick={(e) => handleFilter(e)}
              className={`flt btn border-0 me-4 ${
                isActive === "active" ? "active" : ""
              }`}
              id="active"
              style={{
                color: `hsl(236, 9%, 61%)`,
              }}
            >
              Active
            </span>
            <span
              onClick={(e) => handleFilter(e)}
              className={`flt btn border-0 ${
                isActive === "completed" ? "active" : ""
              }`}
              id="completed"
              style={{
                color: "hsl(236, 9%, 61%)",
              }}
            >
              Completed
            </span>
          </div>
          {!isMobile && (
            <HandleClear onSetListArr={onSetListArr} isLight={isLight} />
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
