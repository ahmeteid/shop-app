import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   let param = useParams();
  //   const apiUrl = `https://api.escuelajs.co/api/v1/products/${param.productId}`;

  const getProductDetails = async () => {
    const apiUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
    setIsLoading(true);
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  //   console.log("Products data:", products); // Debugging: Check if products is an array

  //   if (!Array.isArray(products)) {
  //     return <h2>Loading products...</h2>; // ✅ Prevent mapping on non-array values
  //   }
  return (
    <>
      <div className="container-details">
        <div className="product-img">
          <img
            className="w-full h-80 object-cover"
            src={product.images}
            alt={product.title}
          />
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
              <p className="text">{product.category.name}</p>
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
