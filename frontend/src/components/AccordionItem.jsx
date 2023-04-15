import { useState } from "react";
import emailImage from "../assets/email.png";
import whatsappImage from "../assets/whatsapp.png";
import userImage from "../assets/user.png";
import "./accordion.scss";
import { Link } from "react-router-dom";
function AccordionItem({ title, phone, full, email, path }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="collapseOne"
        >
          <div className="client">
            {" "}
            <img src={userImage} alt="userImage" /> {title}
          </div>
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-column">
          <div className="phone d-flex">
            <img
              className="acordicon"
              src={whatsappImage}
              alt="whatsapp icon"
            />{" "}
            {phone}
          </div>
          <div className="full d-flex">
            <img className="acordicon" src={userImage} alt="userimage" /> {full}
          </div>
          <div className="email d-flex">
            {" "}
            <img className="acordicon" src={emailImage} alt="emailicon" />
            {email}
          </div>
          <button className="btn btn-secondary">
            <Link className="link" to={`edit/${path}`}>
              Edit
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AccordionItem;
