import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
  return (
    <div className="px-10 ">
      <Header />
      {children}
    </div>
  );
}

export default Provider;
