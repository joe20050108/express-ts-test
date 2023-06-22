const request = require("browser-request");
document.onreadystatechange = () => {
    document.getElementById("exit-button").addEventListener("click", () => {
        request.post("/api/exit", (e, r, b) => {
            console.log('xd');
        });
    });
    
    document.getElementById("test"),addEventListener("click", () => {
        request.get('/api/test', (e, r, b) => {
            console.log(r.body);
        });
    });
}
