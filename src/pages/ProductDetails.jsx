import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import "../styles/ProductDetails.css";
// import { useQuery } from "@tanstack/react-query";
// import { apiUrl } from "../apies/Api";
import { IoMdArrowBack } from "react-icons/io";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

function ProductDetails() {
  let { productId } = useParams();
  // const { data: product, isLoading } = useQuery({
  //   queryKey: ["product"],
  //   queryFn: () => fetch(`${apiUrl}/${productId}`).then((res) => res.json()),
  // });

  const { data: products, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  // const [product, setProduct] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  //   let param = useParams();
  //   const apiUrl = `https://api.escuelajs.co/api/v1/products/${param.productId}`;

  // const getProductDetails = async () => {
  //   const apiUrl = `https://fakestoreapi.com/products/${productId}`;
  //   setIsLoading(true);
  //   await fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error("Error fetching product details:", error))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getProductDetails();
  // }, [productId]);

  return (
    <>
      <div className="container-details">
        <Link to="/" className="back-btn">
          <IoMdArrowBack />
        </Link>
        <div className="product-img">
          <img className="" src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          {product.title && (
            <div className="title">
              <h1 className="text">{product.title}</h1>
            </div>
          )}
          {product.price && (
            <div className="price">
              <p className="text">${product.price}</p>
            </div>
          )}
          {product.category && (
            <div className="category">
              <label className="category-label">Category:</label>
              <p className="text">{product.category}</p>
            </div>
          )}
          {product.description && (
            <div className="description">
              <label className="description-label">Description:</label>
              <p className="text text-xl font-bold">{product.description}</p>
            </div>
          )}
        </div>
      </div>
      {/* <h1>Product Details</h1>
      <h2>Product Id: #{productId}</h2>
      <Card key={product.id} product={product} isBtnShow={false} /> */}
    </>
  );
}

export default ProductDetails;
