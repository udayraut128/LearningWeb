function printHello(){
    console.log("hello uday");
}
function bye(event){
    console.log("bye");
    console.log(event);
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