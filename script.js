function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
       menuMobile.classList.remove('open');
       document.querySelector('.icon').src = "icons8-menu-arredondado-30.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icons8-macos-close-30.png";
    }
}

const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', ()=> {
     if(pergunta[i].classList.contains('fechar'))   {
        pergunta[i].classList.toggle('fechar')
        resposta[i].classList.toggle('ativar')
     }else{
        pergunta[i].classList.add('fechar')
        resposta[i].classList.add('ativar')
     }
    })
}