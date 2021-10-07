function add(a, b) {
    return a + b;
}
function rest(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}  
function div(a, b) {
    if(b == 0) {    
        console.log("Division by zero is not allowed");
    }else{
        return a / b;
    }
    
}

exports.add = add;



module.exports = Math;