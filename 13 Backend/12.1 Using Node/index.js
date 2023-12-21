function add(n1 , n2){
    return n1+n2;
}
function sub(n1 , n2){
    return n1-n2;
}

function div(n1 , n2){
    return n1 / n2;
}

function mul(n1 , n2){
    return n1 * n2;
}

function operation(n1 , n2 , operator){
    console.log(operator(n1 , n2));

}

operation(6 , 2 ,mul);