function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('ligth');

    const img = document.querySelector('#profile img')

    if(html.classList.contains('ligth')){
        img.setAttribute('src', './assets/Avatar-ligth.png')
    }else {
        img.setAttribute('src', './assets/Avatar.png')
    }
}