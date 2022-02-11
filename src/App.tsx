import React from "react";
import Info from "./components/Info";
import Counter from "./components/Counter";
import "./App.css";
import Image from "./components/Image";
import { NodeBuilderFlags } from "typescript";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Info nama="Tasha" kelas="XII MIPA 3" isMorning={true} />
        <Counter />
        <Image />
      </div>
    );
  }
}

export default App;
