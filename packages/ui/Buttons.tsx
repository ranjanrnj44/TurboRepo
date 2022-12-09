import * as React from "react";
export const Buttons = () => {
  return (
    <button
      style={{
        backgroundColor: "yellow",
        padding: "0.8rem",
        border: "none",
        borderRadius: "0.5rem",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      onClick={() => console.log("event got triggred!")}
    >
      sharedBtn_
    </button>
  );
};
