import Product from "./Product.jsx";
import "./Product.css";

function ProductTab() {
    return (
      <>
        <Product title="Logitech Mx Master" idx={0} />
        <Product title="Apple Pencil (2nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-tranformer" idx={2} />
        <Product title="Pentronics Toad 23" idx={3} />
      </>
    );
}

export default ProductTab;