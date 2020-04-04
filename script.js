/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 */
  var time
  var flag
// Funcao para atualizar o display do cronometro no html.
// Dica: use do método 'setInterval' para executálo a cada 50 milissegundos.
function updateVisualization() {
  // As próximas linhas buscam pelos respectivos espacos de hora, minuto, segundo e milissegundos
  // Basta implementar a lógica e alterar o conteúdo (innerHTML) com os valores
  var hora = document.getElementsByClassName('hora')[0].innerHTML;
  var minuto = document.getElementsByClassName('minuto')[0].innerHTML;
  var segundo = document.getElementsByClassName('segundo')[0].innerHTML;
  var milissegundo = document.getElementsByClassName('milissegundo')[0].innerHTML;

  time = setInterval(() => {
    document.getElementsByClassName('hora')[0].innerHTML = hora;
    document.getElementsByClassName('minuto')[0].innerHTML = minuto;
    document.getElementsByClassName('segundo')[0].innerHTML = segundo;
    document.getElementsByClassName('milissegundo')[0].innerHTML = milissegundo;

    console.log('segundo   ',segundo);
    console.log('minutos   ',minuto);

    milissegundo += 50
    flag = milissegundo
    console.log(milissegundo);

    if (milissegundo >= 1000) {
      milissegundo = 0

      if (segundo < 59) {
        segundo++
      }else{
        segundo = 0
      }

      if (segundo == 59 && minuto < 59) {
        minuto++
      }else if(minuto == 59){
        minuto = 0
      }

      if (minuto == 59 && hora < 59) {
        hora++
      }else if(hora == 59){
        hora = 0
      }
    }


    
    //console.log(typeof milissegundo);
    //console.log(milissegundo);
    
    
  }, 50);
}


// Funcao executada quando o botão 'Inicar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  if(flag == 1){
    updateVisualization()
    flag = 0
  }else{
    stop()
    reiniciar()
    flag = 1
  }
}

// Funcao executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  clearInterval(time);
  flag = 1;
}

// Funcao executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reiniciar() {
  stop();

  document.getElementsByClassName("hora")[0].innerHTML = "00";
  document.getElementsByClassName("minuto")[0].innerHTML = "00";
  document.getElementsByClassName("segundo")[0].innerHTML = "00";
  document.getElementsByClassName("milissegundo")[0].innerHTML = "000";
  
}
