import { useState, useEffect } from "react";
// import '../styles/modal.css'

const Modal = ({ modalTitle, videoId }) => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };
  const [sizing, setSizing] = useState({
    w: 190,
    h: 0
  });

  useEffect(() => {
    setSizing({
      w:
        window.innerWidth > 640
          ? window.innerWidth / 1.8
          : window.innerWidth / 1.4,
      h:
        window.innerHeight > 640
          ? window.innerHeight * 0.4
          : window.innerHeight * 0.4
    });
  }, []);
  return (
    <>
      <button className="btn popup_pointer" onClick={toggleModal}>
        {modalTitle}
      </button>
      {toggle ? (
        <div>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal_content">
            <iframe
              width={sizing.w}
              height={sizing.h}
              style={{borderRadius: '8px'}}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={modalTitle}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button onClick={toggleModal} className="close_modal">
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
