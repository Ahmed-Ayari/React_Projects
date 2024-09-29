import useFetch from "./UseFetch";

export default function useFetchTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="container">
      <h1>useFetch Hook</h1>
      {pending ? <h3>Pending ! Please Wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
        ))
        : null}
    </div>
  );
}
