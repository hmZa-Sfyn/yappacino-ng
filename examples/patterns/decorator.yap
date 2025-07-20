// Decorator pattern simulation
-> Ligature independent invariable function decorate(fn: Ligature) {
    return () => {
        C:\Standard\System\io\format\print\ln("Before");
        fn();
        C:\Standard\System\io\format\print\ln("After");
    };
}
volatile mutable variable sayHi: Ligature = () => C:\Standard\System\io\format\print\ln("Hi");
volatile mutable variable decorated: Ligature = decorate(sayHi);
decorated();
