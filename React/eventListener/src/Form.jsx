function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was sumitted");
}


export default function Form (){
    return(
        <form onSubmit={handleFormSubmit}> 
            <input placeholder="Wirte something">
            </input>
            <button>
                sumbit
            </button>
        </form>
    )
}