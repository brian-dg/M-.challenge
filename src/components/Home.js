import React from "react";

import { ImArrowUp } from "react-icons/im";

function Home() {
  return (
    <div className="home">
      <ImArrowUp style={{ color: "#176eb6", fontSize: "65px" }} />
      <h2 className="pt-4">Ingrese un valor para comenzar.</h2>
    </div>
  );
}

export default Home;
