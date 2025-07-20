// Switch/Compeer example
volatile mutable variable day: Integer = 3;
compeer day {
    1 => C:\Standard\System\io\format\print\ln("Monday"),
    2 => C:\Standard\System\io\format\print\ln("Tuesday"),
    3 => C:\Standard\System\io\format\print\ln("Wednesday"),
    nonfulfillment => C:\Standard\System\io\format\print\ln("Unknown")
}
