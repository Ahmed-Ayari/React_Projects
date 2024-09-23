import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  return (
    <div className="container lm_container">
      <div className="item_container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button">
        <button onClick={() => setCount(count + 1)}>Load More</button>
      </div>
    </div>
  );
}
