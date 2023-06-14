(() => {
    const exitButton = document.getElementById("exit-button");
    exitButton.addEventListener("click", () => {
        fetch("/exit-button", {method: 'POST'});
    });
})();