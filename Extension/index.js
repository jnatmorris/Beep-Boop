// connect to the server
const socket = io("http://localhost:3000/");

// emit beep to server
beepBtn.addEventListener("click", function () {
    socket.emit("beep");
});

socket.on("boop", () => {
    chrome.notifications.create(`beepID-${Date.now()}`, {
        type: "basic",
        title: "Beep!",
        message: "Someone has beeped you!",
        iconUrl: "img/icon256.png",
    });
});
