//1. Functions as arguments(1)

const repeat = function(fn, n) {
    for (i = 0; i <= n; i++) {
        fn();
    }
}

const hello = function() {
    console.log('Hello world');
}

const goodbye = function() {
    console.log('Goodbye world');
}

repeat(hello,5);
repeat(goodbye,5);