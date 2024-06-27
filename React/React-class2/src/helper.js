// for Lottery code for help to gen random 3 num

function genTicket(n){
    let arr = new Array(n);
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random() *10);
}
return arr;
}

export {genTicket};