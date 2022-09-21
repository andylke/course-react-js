import { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

// const products = [
//   { id: "a", price: 1.1, title: "aaa", description: "aaaaa" },
//   { id: "b", price: 2.2, title: "bbb", description: "bbbbb" },
//   { id: "c", price: 3.3, title: "ccc", description: "ccccc" },
// ];

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const fetchProductsHandler = async () => {
    const response = await fetch(
      "https://react-http-ba022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );
    const data = await response.json();
    const records = [];
    for (const key in data) {
      const item = data[key];
      records.push({
        id: item.id,
        price: item.price,
        title: item.title,
        description: item.description,
      });
    }
    setProducts(records);
  };
  useEffect(() => {
    fetchProductsHandler();
  }, []);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
