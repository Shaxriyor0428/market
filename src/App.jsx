import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Products from "./components/Products";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
  
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      <Header></Header>
      <Products/>
      <ToastContainer/>
    </div>
  );
}

export default App;
