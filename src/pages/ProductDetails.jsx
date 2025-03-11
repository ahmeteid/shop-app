import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

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
      <h1>Product Details</h1>
      <h2>Product Id: #{productId}</h2>
      <Card key={product.id} product={product} isBtnShow={false} />
      {/* {Array.isArray(products) &&
        products.map((product) => {
          return <Card key={product.id} product={product} isBtnShow={false} />;
        })} */}
    </>
  );
}

export default ProductDetails;
