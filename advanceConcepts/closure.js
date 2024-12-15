function outerVariable(){
    let outer = 'I am from outer variable';
    return function innerVariable(){
        console.log(outer);
       
    }
   
}
let outerFunc = outerVariable();
outerFunc();