function printHello(){
    console.log("hello uday");
}
function bye(){
    console.log("bye");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>
                Click me!
            </button>
            
            <p onMouseOver={bye}>
                lorem kldlfdfldfdlfdflfdlfjf
            </p>
        </div>
    )
}