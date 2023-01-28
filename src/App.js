import { React, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar />
      <div className="App">
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Hide
        </button>
        {show ? <Header /> : <div>Good Bye</div>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
