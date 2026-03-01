
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    if(b==0){
        throw new Error("cannot div by 0");
    }
    return a/b;
}

module.exports = {
    add,sub,div
};