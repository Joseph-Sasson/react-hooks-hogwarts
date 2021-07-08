import React from "react";
import Nav from "./Nav";
import PigContainer from "./Container";
import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigContainer hogs={hogs}/>
    </div>
  );
}

export default App;
