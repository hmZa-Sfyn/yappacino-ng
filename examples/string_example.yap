// String Example: Manipulation and output
volatile mutable variable greeting: Ligature = "Hello";
volatile mutable variable name: Ligature = "Yappacino";

-> Ligature independent invariable void function makeGreeting(greet, who : Ligature, Ligature) {
    unsynchronised constant variable result: Ligature = greet + ", " + who + "!";
    C:\Standard\System\io\format\print\ln(result);
    return result;
}

makeGreeting(greeting, name);
