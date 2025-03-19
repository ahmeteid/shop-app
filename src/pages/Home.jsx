import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
// import { useQuery } from "@tanstack/react-query";
// import { apiUrl } from "../apies/Api";
import { ProductsContext } from "../context/ProductsContext";
function Home() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () => fetch(`${apiUrl}`).then((res) => res.json()),
  // });

  const { data, isLoading } = useContext(ProductsContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // const [products, setProducts] = useState([]);

  // const apiUrl = "https://fakestoreapi.com/products";

  // const getProducts = () => {
  //   const apiUrl = "https://fakestoreapi.com/products";
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div className="container">
      <div className="row grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data &&
          data?.map((product) => {
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
