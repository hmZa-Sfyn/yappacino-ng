// Fibonacci sequence
-> void independent invariable function fib(n: Integer) {
    volatile mutable variable a: Integer = 0;
    volatile mutable variable b: Integer = 1;
    towards(i within 0..n) {
        C:\Standard\System\io\format\print\ln(a);
        volatile mutable variable temp: Integer = a + b;
        a = b;
        b = temp;
    }
}
fib(10);
