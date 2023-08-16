const btns = document.querySelectorAll("button")
const img = document.querySelector('img')
const p = document.querySelector('.text p')
const h1 = document.querySelector('.text h1')
const elements = document.querySelectorAll('div[data-add]')
const number = document.querySelectorAll('.number')

const images = {
    'white': './img/white.mac.png',
    'space grey': './img/gray.mac.png'
}

let current = +h1.innerHTML

btns.forEach(btn => {
    btn.onclick = () => {
        const key = images[btn.innerText];
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        img.setAttribute('src', key);
        p.innerText = btn.innerText;
    }
})

elements.forEach(elem => {
    elem.onclick = () =>{
        let priceAdd = +elem.getAttribute('data-add')
        let total = current + priceAdd
        h1.innerHTML = total
    }
})
