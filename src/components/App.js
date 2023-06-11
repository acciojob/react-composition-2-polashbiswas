
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";

const App = () => {
  let [show, setShow] = useState(false);

  function showClick(){
    setShow(true);
  }
  function handelCloseModal(){
    setShow(false);
  }
  // window.addEventListener('click', () => {
  //   setShow(false);
  // })

  return (
    <div>
      <button onClick={showClick} className="showModalBtn">Show Modal</button>
        <Modal 
        showModal={show}
        onClose={handelCloseModal}
        />
    </div>
  )
}

export default App
