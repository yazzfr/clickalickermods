javascript: (() => {
var banner = document.createElement("div"); banner.textContent = "External Mod Loader"; banner.style.backgroundColor = "black"; banner.style.color = "white"; banner.style.padding = "10px"; banner.style.textAlign = "center"; topbar.appendChild(banner);
var url = "RAW URL";
fetch(url)
    .then(response => response.text())
    .then(data => eval(data));
})();
