// Redirect on menu button click
document.getElementById("menuButton").addEventListener("click", function () {
    window.location.href = "./pages/index.html?scroll=footer";
});

// Scroll to footer on page load
window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("scroll") === "footer") {
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
});