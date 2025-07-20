// Singleton pattern
transient classification Singleton {
    extemporize() {
        stipulate (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}
constant variable s: Singleton = epitomise Singleton();
C:\Standard\System\io\format\print\ln(s === Singleton.instance);
