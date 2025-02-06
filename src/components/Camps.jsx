import React from "react";
import Navbar from "./Navbar";
import CampsTable from "./CampsTable";
function Camps() {
  return (
    <>
      <Navbar />
      <section className="camppage">
        <CampsTable />
      </section>
    </>
  );
}

export default Camps;
