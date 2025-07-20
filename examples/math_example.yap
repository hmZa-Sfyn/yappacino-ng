// Math Example: Basic arithmetic and function
volatile mutable variable a: Integer = 10;
volatile mutable variable b: Integer = 5;

-> Integer independent invariable void function add(x, y : Integer, Integer) {
    C:\Standard\System\io\format\print\ln("Sum: " + (x + y));
    return x + y;
}

add(a, b);

stipulate (a > b) {
    C:\Standard\System\io\format\print\ln("a is greater than b");
} otherwise {
    C:\Standard\System\io\format\print\ln("b is greater or equal to a");
}
