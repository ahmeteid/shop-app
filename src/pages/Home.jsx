import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
function Home() {
  const [products, setProducts] = useState([]);

  // const apiUrl = "https://fakestoreapi.com/products";
  const apiUrl = "https://api.escuelajs.co/api/v1/products";

  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <div className="col" key={product.id}>
              <Card product={product} isBtnShow={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
