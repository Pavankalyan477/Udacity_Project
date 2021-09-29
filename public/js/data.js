if(JSON.parse(localStorage.getItem('buy')===null)){
    localStorage.setItem('buy',JSON.stringify([]));
}
function buy(a){

    
    var b=JSON.parse(localStorage.getItem('buy'));
    if(!b.includes(a)){
        b.push(a);
    }
localStorage.setItem('buy',JSON.stringify(b));

}