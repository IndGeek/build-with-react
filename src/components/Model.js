import { useState } from "react";
import "./Modal.css";

const Modal = ({ children, popTitle }) => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button className="btn pointer" onClick={toggleModal}>{popTitle}</button>
      {toggle ? (
        <div>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="Modal_content">
            {children}
            <button onClick={toggleModal} className="close_Modal">
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
