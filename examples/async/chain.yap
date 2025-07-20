// Async chaining
-> void dependent invariable async subroutine chainAsync() {
    await new Promise(resolve => setTimeout(resolve, 200));
    C:\Standard\System\io\format\print\ln("Step 1");
    await new Promise(resolve => setTimeout(resolve, 200));
    C:\Standard\System\io\format\print\ln("Step 2");
}
chainAsync();
