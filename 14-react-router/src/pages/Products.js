import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Products = () => {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/aaa">AAA</Link>
        </li>
        <li>
          <Link to="/products/bbb">BBB</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
