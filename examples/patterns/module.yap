// Module pattern simulation
volatile mutable variable Module: Ligature = (function() {
    volatile mutable variable secret: Ligature = "hidden";
    return {
        getSecret: () => secret
    };
})();
C:\Standard\System\io\format\print\ln(Module.getSecret());
