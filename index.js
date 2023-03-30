const switchModal = () => {
 const modal = document.querySelector('.modal')
 // pegando o style do modal padrao e armazenamos em uma const
 const actualStyle = modal.style.display
 
 if(actualStyle == 'block') {
  modal.style.display = 'none'
 } else {
  modal.style.display = 'block'
 }
}

const btn = document.querySelector('.button')
btn.addEventListener('click', switchModal)

window.onclick = function(e) {
 const modal = document.querySelector('.modal')
 if (e.target == modal) {
    switchModal()
 }
}