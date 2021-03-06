import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="container">
      <h1 className="header1 text-center my-3">FAQ</h1>
      <div className="faq-container">
        <div className="faq-img-container">
          <img
            src="https://i.ibb.co/Xtj16zq/411430-Group-of-people-holding-question-mark-icons-Converted.jpg"
            alt=""
          />
        </div>
        <div className="accordion-container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is the size of your warehouse? <span>ㅤㅤ</span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We have a 10000 square feet massive building with the capacity
                  to store 50000 Monitor at the same time.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How to become a Supplier? <span>ㅤㅤ</span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  To become a supplier you need to be the one who make the product or you need to be the authorized  importer of the products. We do that to maintain our safety and reputations. They are just basic requirement To See the full requirement <Link className="text-danger" to="/">
                     click Hear
                  </Link>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Why us <span>ㅤㅤ</span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                Because we have the best setup for storing monitor. And we provide 100% return if any kinds of accident happened in our end.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
