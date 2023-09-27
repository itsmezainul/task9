import Footer from "./Footer";
import Lists from "./Lists";
import Header from "./Header";
import InputField from "./InputField";

export default function Container({
  isLight,
  setIsLight,
  newArray,
  onSetListArr,
  listArr,
  isMobile,
  onHandleComplete,
  onHandleFiltered,
  filteredItem,
  isloading,
}) {
  return (
    <div id="container" className="mt-5">
      <Header isLight={isLight} setIsLight={setIsLight} />
      <InputField onSetListArr={onSetListArr} isLight={isLight} />
      <Lists
        newArray={newArray}
        listArr={listArr}
        isMobile={isMobile}
        onHandleComplete={onHandleComplete}
        onSetListArr={onSetListArr}
        filteredItem={filteredItem}
        isLight={isLight}
        isloading={isloading}
      />
      <Footer
        listArr={listArr}
        onSetListArr={onSetListArr}
        isMobile={isMobile}
        onHandleFiltered={onHandleFiltered}
        isLight={isLight}
      />
      {listArr.length ? (
        <p className="text-center" style={{ color: `hsl(236, 9%, 61%)` }}>
          Drag and drop to reorder list
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
