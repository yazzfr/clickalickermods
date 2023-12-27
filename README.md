# Clickalicker mods repo
use the external mod loader(ezloader) to load mods, replace where it says "RAW URL HERE" with the raw url of one of the mods and to get the raw url of one of the mods go to them and click raw data and copy the link.
# Example on how to load the score editor
```js
javascript: var banner = document.createElement("div"); banner.textContent = "Ez Mod Loader"; banner.style.backgroundColor = "black"; banner.style.color = "white"; banner.style.padding = "10px"; banner.style.textAlign = "center"; topbar.appendChild(banner); var url = "https://raw.githubusercontent.com/yazzfr/clickalickermods/main/YazzsScoreEditor.txt"; fetch(url).then(response => response.text()).then(data => eval(data));
```
