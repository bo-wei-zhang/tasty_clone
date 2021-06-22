const slideArr = Array.from(document.querySelectorAll('.slide'))
const selectors = Array.from(document.querySelectorAll('.selector'))
let active = 0
let total = slideArr.length

for (let i = 0; i < total; i++) {
    selectors[i].index = i
    selectors[i].addEventListener('click', swapImg)
}

setInterval(swapImgAuto, 6500)

function swapImg(e) {
    for (let i = 0; i < total; i++) {

        if (selectors[i] === this){
            slideArr[i].classList.add('active')
            selectors[i].classList.add('active')
        }else{
            slideArr[i].classList.remove('active')
            selectors[i].classList.remove('active')
        }

    }

}
function swapImgAuto(e) {

    for (let i = 0; i < total; i++) {

        if (selectors[i] === selectors[active]){
            slideArr[i].classList.add('active')
            selectors[i].classList.add('active')
        }else{
            slideArr[i].classList.remove('active')
            selectors[i].classList.remove('active')
        }
    }
    active++
    if (active > total-1) active = 0

}
// console.log(hasClass(document.querySelector('.slides > .slide'),'active'))
// function hasClass(element, cls) {
//     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
// }