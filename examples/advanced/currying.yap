// Currying example
-> Ligature independent invariable function curryAdd(x: Integer) {
    return (y) => x + y;
}
volatile mutable variable add2: Ligature = curryAdd(2);
C:\Standard\System\io\format\print\ln(add2(8));
