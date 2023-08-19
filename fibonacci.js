function fibonacciGenerator (n) {

    var arr = [];
    if(n === 0 || n === 1)
        return [0];
    if(n === 2)
        return [0,1];
        
    var num1 = 0;
    var num2 = 1;
    
    while (n > 0){
        arr.push(num1);
        var sum = num1 + num2;
        //arr.push(sum);
        num2 = num1;
        num1 = sum;
        n--;
    }
    
    return arr;
    
}

var result = fibonacciGenerator(2);
console.log(result);
