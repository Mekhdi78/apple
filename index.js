let colornavItems = document.querySelectorAll('li')
let colorElement = document.querySelector('.color')
let imageElement = document.querySelector('.img1')

let colors = [
    {
        name: ' Purple',
        imgPath: './img/purple.jfif'
    },
    {
        name: ' Gold',
        imgPath: './img/gold.jfif'
    },
    {
        name: ' White',
        imgPath: './img/white.jfif'
    },
    {
        name: ' Black',
        imgPath: './img/black.jfif'
    }
];

let defaultSelected = colors[0];

colornavItems.forEach((item, index) => {
    let color = colors[index];

    item.onmouseenter = () => {
        colorElement.innerHTML = `Color - ${color.name}`;
    }

    item.onmouseleave = () => {
        colorElement.innerHTML = `Color - ${defaultSelected.name}`;
    }

    item.onclick = () => {
        imageElement.src = color.imgPath;
        colorElement.innerText = `Color - ${color.name}`;
        defaultSelected = color;
    }
});


const modal = document.querySelector('.modal')
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const modal_bg = document.querySelector('.modal_bg')

open.onclick = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'flex'
    setTimeout(() => {
        modal.style.opacity = "1"
        modal_bg.style.opacity = "1"
    }, 100)
    // body.style.scrollbar = 'hidden'
}

close.onclick = () => {
    modal.style.opacity = "0"
    modal_bg.style.opacity = "0"

    setTimeout(() => {
        modal.style.display = 'none'
        modal_bg.style.display = 'none'
    }, 500)
}

document.body.classList.add('modalOpen');
document.body.classList.remove('modalOpen');