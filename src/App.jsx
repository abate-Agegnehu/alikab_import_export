import React from "react";
import About from "./pages/About";
import Header from "./components/header/Header";
import Carcko from "./pages/Carcko";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div>
      <div>From home page</div>
      <Header />
      {/* <About /> */}
      {/* <Carcko /> */}
      <Contact />
    </div>
  );
};

export default App;
