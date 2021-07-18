const elementoMomento = document.querySelector('#momento')
const elementoImagem = document.querySelector('#imagem')
let elementoBotao = document.querySelector('#alterar')

elementoBotao.addEventListener('click', () =>{
  if(elementoBotao.value == 'primeiro'){
    elementoImagem.src = './assets/img/anakin-pesodomundo.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'segundo'
  } else if(elementoBotao.value == 'segundo'){
    elementoImagem.src = './assets/img/anakin-padme.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'terceiro'
  } else if(elementoBotao.value == 'terceiro'){
    elementoImagem.src = './assets/img/anakin-mae.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'quarto'
  } else if(elementoBotao.value == 'quarto'){
    elementoImagem.src = './assets/img/anakin-desesperado.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'quinto'
  } else if(elementoBotao.value == 'quinto'){
    elementoImagem.src = './assets/img/anakin-ladonegro.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'sexto'
  } else if(elementoBotao.value == 'sexto'){
    elementoImagem.src = './assets/img/anakin-louco.jpg'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'setimo'
  } else if(elementoBotao.value == 'setimo'){
    elementoImagem.src = './assets/img/anakin-queimado.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'oitavo'
  } else if(elementoBotao.value == 'oitavo'){
    elementoImagem.src = './assets/img/anakin-mortepadme.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'nono'
  } else if(elementoBotao.value == 'nono'){
    elementoImagem.src = './assets/img/luke-mortedopai.png'
    elementoMomento.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, totam.'
    elementoBotao.value = 'primeiro'
  }
})