const body = document.querySelector('.page-wrapper');
const loadpage = document.querySelector('.load-page');
loadpage.addEventListener('click', (e) => {
    fetch('http://127.0.0.1:5500/For-tree-though/main.html')
        .then(res => res.text())
        .then(html => body.innerHTML = html)
});