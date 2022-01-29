const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const moon = document.getElementById('dark');
const icons = document.querySelector('i.bi');
const icon_st = document.querySelector('.bi-reception-4');

async function darkTheme() {
    body.classList.toggle('dark-actived');
    h1.classList.toggle('dark-actived');
    moon.classList.toggle('dark-actived');
    icons.classList.toggle('dark-actived');
    icon_st.classList.toggle('dark-actived');
}
moon.addEventListener('click', darkTheme)