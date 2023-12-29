# Clickalicker mods repo
use the external mod loader(ezloader) to load mods, replace where it says "RAW URL HERE" with the raw url of one of the mods and to get the raw url of one of the mods go to them and click raw data and copy the link.
# Example on how to load the score editor
Go to [Clickalicker Modded](https://clickalicker.yazfrog.repl.co)
Press the 'Load A mod from raw link' button.
Then paste a raw link for one of the mods in the prompt, and you're done!
You can load this using the built in mod loader on clickalicker modded!
```js
javascript:function makeBanner() {var banner = document.createElement("div"); banner.textContent = "Score Editor made by Yazz! Press Right-Shift to change score!"; banner.style.backgroundColor = "black"; banner.style.color = "white"; banner.style.padding = "10px"; banner.style.textAlign = "center"; topbar.appendChild(banner);} makeBanner(); document.addEventListener('keydown', function(event) {if (event.code === 'ShiftRight') {let amount = prompt('Enter the amount of score to add:'); if (amount !== null && amount !== '') { let parsedAmount = parseInt(amount); if (!isNaN(parsedAmount)) { addScore(parsedAmount);} else {alert('Please enter a valid number.');}}}}); function addScore(amnt) {let newScore = score + amnt - 1;score = newScore;alert('Updated score: ' + score + '\nAdds 1 when you click');}for(var start = 1; start < 10; start++) {setTimeout(function () {alert = function() {};}, 500);}
```
