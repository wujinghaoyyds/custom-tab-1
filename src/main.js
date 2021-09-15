import './style.css'

const formBox = document.getElementById('formSearch')
const engineMenu = document.getElementById('selectEngine')
const engineButton = document.getElementById('searchEngine')
const baiduButton = document.getElementById('baidu')
const googleButton = document.getElementById('google')
const BingButton = document.getElementById('Bing')
const clearButton = document.getElementById('clearInput')
const inputBox = document.getElementById('inputSearch')
const clearIcon = document.getElementById('clear')
const searchIcon = document.getElementById('search')
const engineButtonIcon = document.getElementById('engineIcon')
const A360Button = document.getElementById('A360')
const soGouButton = document.getElementById('soGou')


function showMenu() {engineMenu.style.display = 'block'}

function hideMenu() {engineMenu.style.display = 'none'}

engineButton.addEventListener('click', showMenu)
engineMenu.addEventListener('click', hideMenu)

document.getElementById('baidu').addEventListener('click', () => {
    console.log('执行了')
})


function clearButtonHide() {
    if (inputBox.value === '' || inputBox.value === undefined || inputBox.value === null) {
        clearIcon.style.display = 'none'
        searchIcon.style.display = 'none'
    } else {
        clearIcon.style.display = 'block'
        searchIcon.style.display = 'block'
    }
}

clearButton.addEventListener('click', () => {
    inputBox.value = ''
    clearIcon.style.display = 'none'
    searchIcon.style.display = 'none'
})
inputBox.addEventListener('input', clearButtonHide)


soGouButton.addEventListener('click', () => {
    formBox.action = 'https://www.sogou.com/web'
    inputBox.name = 'query'
    engineButtonIcon.innerHTML = `<use xlink:href="#icon-soGou"></use>`
})


baiduButton.addEventListener('click', () => {
    formBox.action = 'https://www.baidu.com/s'
    inputBox.name = 'wd'
    engineButtonIcon.innerHTML = `<use xlink:href="#icon-baidu"></use>`
})
googleButton.addEventListener('click', () => {
    formBox.action = 'https://www.google.com.hk/search'
    inputBox.name = 'q'
    engineButtonIcon.innerHTML = `<use xlink:href="#icon-google"></use>`
})
BingButton.addEventListener('click', () => {
    formBox.action = 'https://cn.bing.com/search'
    inputBox.name = 'q'
    engineButtonIcon.innerHTML = `<use xlink:href="#icon-Bing"></use>`
})
A360Button.addEventListener('click', () => {
    formBox.action = 'https://www.so.com/s'
    inputBox.name = 'q'
    engineButtonIcon.innerHTML = `<use xlink:href="#icon-icon360"></use>`
})




// const localAction = localStorage.getItem('action')
// const localName = localStorage.getItem('name')
// const localIcon = localStorage.getItem('icon')
//
// window.onbeforeunload = () => {
//     const currentAction = JSON.stringify(formBox.action)
//     const currentName = JSON.stringify(inputBox.name)
//     const currentIcon = JSON.stringify(engineButtonIcon.innerHTML)
//     localStorage.setItem('action', currentAction)
//     localStorage.setItem('name', currentName)
//     localStorage.setItem('icon', currentIcon)
// }
// formBox.action = JSON.parse(localAction)
// inputBox.name = JSON.parse(localName)
// engineButtonIcon.innerHTML = JSON.parse(localIcon)



