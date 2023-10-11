function setTitle(a) {
    document.getElementById('title').textContent = a
}

function setDescription(b) {
    document.getElementById('paragraph').textContent = b
}

function setBackgroundColor(c) {
    document.body.style.backgroundColor = c
}

function setFontColor(d) {
    document.body.style.color = d
}



function setTheme(e) {
    if (e === 'dark'){
        document.body.classList.add('dark');
    } else if (e === 'light') {
        document.body.classList.add('light');
    } else {
        console.log('Invalid Theme')
    }
}