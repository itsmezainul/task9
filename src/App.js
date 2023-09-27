import { useEffect, useState } from "react";
import Container from "./Components/Container";
export default function App() {
  const [isLight, setIsLight] = useState(true);
  const [listArr, setListArr] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const [dimention, setDimention] = useState(window.innerWidth);
  const [filterTarget, setFilterTarget] = useState("all");
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setListArr(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  function detectSize() {
    setDimention(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    setIsMobile(dimention <= 592 ? true : false);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [dimention]);

  const lightD = "hsl(236, 33%, 92%) url(./images/bg-desktop-light.jpg)";
  const lightM = "hsl(236, 33%, 92%) url(./images/bg-mobile-light.jpg)";
  const darkD = "hsl(235, 21%, 11%) url(./images/bg-desktop-dark.jpg)";
  const darkM = "hsl(235, 21%, 11%) url(./images/bg-mobile-dark.jpg)";

  function handleComplete(id) {
    setListArr((pre) =>
      pre.map((prev) =>
        prev.id === id ? { ...prev, completed: !prev.completed } : { ...prev }
      )
    );
  }

  function handleFiltered(e) {
    setFilterTarget(e.target.attributes.id.value);
  }

  let filteredItem = listArr.filter((prev) => {
    if (filterTarget === "active") {
      return prev.completed === false;
    } else if (filterTarget === "completed") {
      return prev.completed === true;
    } else {
      return prev;
    }
  });

  return (
    <div
      id="main"
      style={{
        background: `${
          isLight && isMobile
            ? lightM
            : isLight && !isMobile
            ? lightD
            : !isLight && isMobile
            ? darkM
            : darkD
        } no-repeat center top`,
      }}
      className="d-flex justify-content-center"
    >
      <Container
        isLight={isLight}
        setIsLight={setIsLight}
        onSetListArr={setListArr}
        listArr={listArr}
        isMobile={isMobile}
        onHandleComplete={handleComplete}
        onHandleFiltered={handleFiltered}
        filteredItem={filteredItem}
        isloading={isloading}
      />
    </div>
  );
}
