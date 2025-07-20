// String Example: Manipulation and output
volatile mutable variable greeting: Ligature = "Hello";
volatile mutable variable name: Ligature = "Yappacino";
volatile mutable variable 5: Integer = 4;

-> Ligature independent invariable void function makeGreeting(greet, who : Ligature, Ligature) {
    unsynchronised constant variable result: Ligature = greet + ", " + who + "!";
    C:\Standard\System\io\format\print\ln(result);
    return result;
}

-> Ligature independent invariable void function showNumberVar() {
    C:\Standard\System\io\format\print\ln("Variable '5' value: " + 5);
}

makeGreeting(greeting, name);
showNumberVar();
