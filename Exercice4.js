
function fibonacci(integer) {

    if (integer < 2) {
        return integer;
    }

    var previous = 0;
    var current = 1;
    var total = 0;
    for(var i = 2; i <= integer; i++) {
        total = previous + current;
        previous = current;
        current = total;
    }
    return total;
}

for(var i = 0; i < 10; i ++ ) {

    console.log(fibonacci(i));
}