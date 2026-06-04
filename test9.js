function hello (n){
    if (n===0){
        return;
    };
    console.log(n);
    hello(n-1);  /// recustion the funtion call himself
    
}

hello(3)