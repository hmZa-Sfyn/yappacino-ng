// Simulated fetch
-> void dependent invariable async subroutine fetchData() {
    C:\Standard\System\io\format\print\ln("Fetching...");
    await new Promise(resolve => setTimeout(resolve, 300));
    C:\Standard\System\io\format\print\ln("Done!");
}
fetchData();
