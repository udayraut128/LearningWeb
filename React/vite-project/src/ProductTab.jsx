
import Product from "./Product.jsx";

function ProductTab(){
    let options = ["hi-tech","durable","fast"];
    // let options = [<li>Hi-tech</li>,<li>Durable</li>,<li>Fast</li>];
    // let options2 = {a:"hi-tech",b:"durable",c:"fast"};
    return (
      <>
        <Product title="phone" price={3000} features = {options}  />
        <Product title="laptop" price={3001} />
        <Product title="pen" price={40} />
        
      </>
    );
}

export default ProductTab;