import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Header></Header>
      <Products/>
    </div>
  );
}

export default App;
