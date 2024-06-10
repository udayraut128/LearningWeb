import "./Product.css";

// function Product(props) {
//   return (
//     <div className="Product">
//       <h2>{props.title} </h2>
//       <h5>Description :{props.price}</h5>
//     </div>
//   );
// }

// function Product({title,price,features}) {

//   return (
//     <div className="Product">
//       <h2>{title} </h2>
//       <h5>Price :{price}</h5>
//       <p>{features}</p>
//     </div>
//   );
// }


// not working error in map 
// function Product({ title, price, features }) {
//   return (
//     <div className="Product">
//       <h2>{title} </h2>
//       <h5>Price :{price}</h5>
//       <ul>
//         {features.map((feature,index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
 

function Product({title,price}) {
  // let isDiscount = price>3000 ? "5%":"";
  // let styles= {backgroundColor:"red"};
  let styles = { backgroundColor: price > 3000 ?"red":"" };
  return (
    <div className="Product" style={styles}>
      <h2>{title} </h2>
      <h5>Price :{price}</h5>
      {price >3000 ? <p>Discount of 5%</p>:null}
      
      
    </div>
  );
}


export default Product;
