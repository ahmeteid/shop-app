import { Link } from "react-router-dom";
import "../styles/Card.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function Card({ product, isBtnShow }) {
  return (
    <>
      <Link className="card inline-block" to={`/${product.id}`}>
        <div className="card-header">
          <div className="card-image">
            <img className="image" src={product.images} alt={product.title} />
            {/* {product.title && (
              <div className="title w-full bg-blue-300 absolute bottom-1 p-2 capitalize text-white font-bold">
                <h1 className="text">{product.title.slice(0, 15)}...</h1>
              </div>
            )} */}
            {isBtnShow ? (
              <div className="card-btn">
                <Link
                  className="btn relative font-bold capitalize text-xl"
                  // to={`/${product.id}`}
                  to={"/"}
                >
                  <MdOutlineShoppingCart />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        <div className="card-body">
          {product.title && (
            <div className="title">
              <h1 className="text">{product.title.slice(0, 25)}...</h1>
            </div>
          )}
          {/* {product.description && (
            <div className="desc py-1 px-2 text-white w-fit rounded-md mt-1 bg-blue-500">
              {product.description.slice(0, 20)}...
            </div>
          )} */}
          <div className="price">{product.price}$</div>
        </div>
        {/* {isBtnShow ? (
          <div className="card-btn cursor-pointer w-full mt-2 mb-2 text-center bg-white text-blue-500 py-1 px-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out">
            <Link
              className="btn relative font-bold capitalize text-xl"
              to={`/${product.id}`}
            >
              Details
            </Link>
          </div>
        ) : null} */}
      </Link>
    </>
  );
}

export default Card;
