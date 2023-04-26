import { useState } from "react";
import "./model.css";

const Model = ({ children, popTitle }) => {
  const [toggle, setToggle] = useState(false);
  const toggleModel = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button className="btn pointer" onClick={toggleModel}>{popTitle}</button>
      {toggle ? (
        <div>
          <div onClick={toggleModel} className="overlay"></div>
          <div className="model_content">
            {children}
            <button onClick={toggleModel} className="close_model">
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Model;
