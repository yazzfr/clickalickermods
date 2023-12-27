javascript: (() => {var url = prompt("Enter the URL:");
    fetch(url)
        .then(response => response.text())
        .then(data => eval(data));})();
