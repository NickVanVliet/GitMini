function catButton() {
    fetch('/cat')
    .then(response => response.json())
    .then(data => {
        document.getElementById('counter').textContent = `Cat visitors: ${data.visitors}`;
    });
}