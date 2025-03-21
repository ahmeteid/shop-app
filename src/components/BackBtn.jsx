import { Link } from "react-router-dom";
import "../styles/BackBtn.css";
import { IoMdArrowBack } from "react-icons/io";

function BackBtn() {
  return (
    <>
      <Link to="/" className="back-btn">
        <IoMdArrowBack />
      </Link>
    </>
  );
}

export default BackBtn;
