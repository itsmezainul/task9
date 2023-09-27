import { useState } from "react";

export default function InputField({ onSetListArr, isLight }) {
  const [input, setInput] = useState("");
  function handleSumbit(e) {
    e.preventDefault();
    if (!input) return;
    const id = crypto.randomUUID();
    const ArrayN = {
      id,
      title: input,
      completed: false,
    };
    onSetListArr((prev) => [...prev, ArrayN]);
    setInput("");
  }
  return (
    <form action="" onSubmit={(e) => handleSumbit(e)}>
      <div
        className="input-field p-2"
        style={{
          background: `${isLight ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)"}`,
        }}
      >
        <div
          style={{
            borderColor: `${
              isLight ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)"
            }`,
          }}
        ></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            color: `${isLight ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)"}`,
          }}
        />
      </div>
    </form>
  );
}
