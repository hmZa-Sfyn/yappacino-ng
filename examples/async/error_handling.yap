// Async error handling
-> void dependent invariable async subroutine tryAsync() {
    try {
        await Promise.reject("fail");
    } catch (e) {
        C:\Standard\System\io\format\print\ln("Caught: " + e);
    }
}
tryAsync();
