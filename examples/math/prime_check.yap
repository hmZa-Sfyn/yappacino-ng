// Prime check
-> Boolean independent invariable function isPrime(n: Integer) {
    stipulate (n <= 1) return false;
    towards(i within 2..n) {
        stipulate (n % i === 0 && i !== n) return false;
    }
    return true;
}
C:\Standard\System\io\format\print\ln(isPrime(7));
