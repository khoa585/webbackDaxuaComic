import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
export default function TopDays() {
  const numberOfCcapacitors = (i) => {
    if (i < 10) return "0" + i;
    else return i;
  };
  return (
    <div>
      <div className="list-unstyled">
        <li className="list-style-comics">
          <span
            className={`txt-rank fn-order ${
              1 === 1
                ? "top_One"
                : 2 === 2
                ? "top_Two"
                : 3 === 3
                ? "top_Three"
                : ""
            }`}
          >
            {numberOfCcapacitors(1)}
          </span>
          <div className="t-item">
            <div className="list-Stote-comic">
              <div>
                <span className="thumb-comic" title="">
                  <img
                    className="img-fluid"
                    src="http://st.nettruyen.com/data/comics/201/the-new-gate.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <div className="listStote">
                <h6 className="title-comic">
                  Tuyệt Thế Thần Y: Phúc Hắc Đại Tiểu Thư
                </h6>
                <p className="chapter-comic">
                  <span>Đọc tiếp Chapter 1 </span>
                  <span className="view-pull-right">
                    <BsFillEyeFill></BsFillEyeFill> 6.179.452
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-style-comics">
          <span
            className={`txt-rank fn-order ${
              1 === 1
                ? "top_One"
                : 2 === 2
                ? "top_Two"
                : 3 === 3
                ? "top_Three"
                : ""
            }`}
          >
            {numberOfCcapacitors(2)}
          </span>
          <div className="t-item">
            <div className="list-Stote-comic">
              <div>
                <span className="thumb-comic" title="">
                  <img
                    className="img-fluid"
                    src="http://st.nettruyen.com/data/comics/201/the-new-gate.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <div className="listStote">
                <h6 className="title-comic">
                  Tuyệt Thế Thần Y: Phúc Hắc Đại Tiểu Thư
                </h6>
                <p className="chapter-comic">
                  <span>Đọc tiếp Chapter 1 </span>
                  <span className="view-pull-right">
                    <BsFillEyeFill></BsFillEyeFill> 6.179.452
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="list-style-comics">
          <span
            className={`txt-rank fn-order ${
              1 === 1
                ? "top_One"
                : 2 === 2
                ? "top_Two"
                : 3 === 3
                ? "top_Three"
                : ""
            }`}
          >
            {numberOfCcapacitors(3)}
          </span>
          <div className="t-item">
            <div className="list-Stote-comic">
              <div>
                <span className="thumb-comic" title="">
                  <img
                    className="img-fluid"
                    src="http://st.nettruyen.com/data/comics/201/the-new-gate.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <div className="listStote">
                <h6 className="title-comic">
                  Tuyệt Thế Thần Y: Phúc Hắc Đại Tiểu Thư
                </h6>
                <p className="chapter-comic">
                  <span>Đọc tiếp Chapter 1 </span>
                  <span className="view-pull-right">
                    <BsFillEyeFill></BsFillEyeFill> 6.179.452
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}
