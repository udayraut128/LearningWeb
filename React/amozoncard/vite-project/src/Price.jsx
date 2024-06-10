export default function Price({oldPrice,newPrice}){
    let oldStyles = {
        textDecorationLine:"line-through",
    };
    let newStyles = {
        fontWeight : "bold",
    };
    let styles = {
        backgroundColor:"yellow",
        borderRadius:"0 0 10px 10px ",
        width:"300px",

    };
    return (
      <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={newStyles}>{newPrice}</span>
      </div>
    );
}