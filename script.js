const btn = document.querySelector(".floating")
const main = document.getElementById("parent")
const container = document.querySelector(".container")
const second = document.querySelector(".second")
btn.addEventListener('click' , () => {
    main.classList.remove("hide")
    main.classList.add('wrapper')
})

window.onclick = (e) => {
    console.log(e.target.parentElement.parentElement)
    if(e.target.parentElement.parentElement === main || e.target.parentElement.parentElement === container|| e.target.parentElement.parentElement === second || e.target === btn || e.target.parentElement === btn){
        main.classList.add('wrapper')
        main.classList.remove('hide')
    }
    else{
        main.classList.add('hide')
    }
}