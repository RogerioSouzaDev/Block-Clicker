
document.addEventListener('DOMContentLoaded', function (){
 let moeda = document.getElementById('imagemMoeda')
 let  bloco = document.getElementById('imagemBloco')
 let background = document.getElementById('background')
 let qtdmoedas = document.getElementById('contadorMoedas')
 let totalMoedas = 0;
 let vida = document.getElementById('vidas')
 let totalVidas = 0;
 let somMoeda = document.createElement('audio')
 let somVida = document.createElement('audio')
 let nesBtn = document.getElementById('nesBtn')


 moeda.style.visibility = 'hidden';

 somMoeda.src = 'source/tomp3.cc -  SOUND EFFECT MARIO COIN SOUND I SOM DA MOEDA DO MARIO  BÔNUS NA DESCRIÇÃO .mp3'
 somVida.src = 'source/tomp3.cc - Som de 1 vida  Super Mario Bros.mp3'

   window.boxClick = function(){
        if(moeda.style.visibility === 'hidden'){
            moeda.style.visibility = 'visible';
            moeda.style.opacity = '1'

           setTimeout (function(){
            moeda.style.visibility = 'hidden';
            moeda.style.opacity = '0'
            moeda.disabled = true;
           },1000)

           totalMoedas++
           qtdmoedas.innerText = 'Moedas: '+ totalMoedas

           somMoeda.playbackRate = 2.0

           somMoeda.play()

        }
        if(totalMoedas === 10){
            totalVidas++
            vida.innerText = 'Vidas: '+ totalVidas
            totalMoedas = 0;
            somVida.play()
        }
    }
    
     nesBtn.addEventListener('click', ()=>{
        if(!nesBtn.disabled){
        background.classList.toggle('background')
        moeda.src = '../dontPressThisButton/source/5125738499346007568_1.png'
        bloco.src = '../dontPressThisButton/source/Daco_560890.png'

        nesBtn.disabled = true
        }
    })


})

