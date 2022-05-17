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
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We have a 5000 square feet massive building with the capacity
                  to store 50000 products at the same time.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How to supply product to us? <span>ㅤㅤ</span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  If you want to be a supplier the first thing you need is to be
                  the one who makes the product. We don't take products from
                  third-party organizations. And the 2nd thing is your product
                  has to be authentic. To see full requirements{" "}
                  <Link className="text-danger" to="/">
                    click Hear
                  </Link>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is your location? <span>ㅤㅤ</span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  OOut of every other question, the most question we revive is
                  that. Whare is your location. If your gays are pay attention
                  to the footer that is all the info you need from our email to
                  our location.
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
