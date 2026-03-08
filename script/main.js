document.getElementById("close-button").onclick = function () {
    const mainSection = document.getElementById("main-section");
    const friendSection = document.getElementById("friends-section");
    mainSection.style.width = "calc(100vw - 25.9rem)";
    friendSection.style.display = "none";
};