import React from "react";
import Header from "./_components/Header";

function Provider({ children }) {
  return (
    <div>
      <Header />
      <div className="px-10">
      {children}
      </div>
    </div>
  );
}

export default Provider;
