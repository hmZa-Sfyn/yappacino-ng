// Observer pattern simulation
volatile mutable variable listeners: Ligature = [];
-> void independent invariable function subscribe(fn: Ligature) {
    listeners.push(fn);
}
-> void independent invariable function notifyAll(msg: Ligature) {
    towards(i within 0..listeners.length) {
        listeners[i](msg);
    }
}
subscribe((m) => C:\Standard\System\io\format\print\ln("Listener: " + m));
notifyAll("Hello!");
