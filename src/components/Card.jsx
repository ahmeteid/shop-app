import { Link } from "react-router-dom";

function Card({ product, isBtnShow }) {
  return (
    <>
      <div className="card h-85 w-60 hover:shadow-2xl shadow-md shadow-blue-800 pt-4 pb-3 px-2 bg-blue-500 rounded-md border-2 border-blue-600 transition duration-200 ease-in-out">
        <div className="card-header relative">
          <div className="card-image h-40 overflow-hidden w-full mb-3 border-b-2 border-white">
            <img
              className="block object-cover rounded-t-sm hover:scale-105 transition-transform duration-200 ease-in-out"
              src={product.images}
              alt="Product Image"
            />
            {product.title && (
              <div className="title w-full bg-blue-300 absolute bottom-1 p-2 capitalize text-white font-bold">
                <h1 className="text">{product.title.slice(0, 15)}...</h1>
              </div>
            )}
          </div>
        </div>
        <div className="card-body bg-white text-blue-500 w-full rounded-md py-1 px-2 font-bold mt-2 ">
          {product.description && (
            <div className="desc py-1 px-2 text-white w-fit rounded-md mt-1 bg-blue-500">
              {product.description.slice(0, 20)}...
            </div>
          )}
          <div className="price py-1 px-2 text-white w-fit rounded-md mt-1 bg-blue-500">
            {product.price}$
          </div>
        </div>
        {isBtnShow ? (
          <div className="card-btn cursor-pointer w-full mt-2 mb-2 text-center bg-white text-blue-500 py-1 px-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out">
            <Link
              className="btn relative font-bold capitalize text-xl"
              to={`/${product.id}`}
            >
              Details
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Card;
