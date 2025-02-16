import React from "react";
import Navbar from "./components/Navbar";
import CampsTable from "./components/CampsTable";

function Camps() {
  return (
    <>

      <Navbar />
      <section className="camppage">
      <CampsTable/>
      </section>
    </>
  );
}

export default Camps;
