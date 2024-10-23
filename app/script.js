console.log('Primi passi col DOM')

// Richiamo il bottone nello script e lo associo ad una variabile
const powerLampButton = document.querySelector('.lamp-button')
console.log(powerLampButton)

// Richiamo l'immagine nello script e la associo ad una variabile
const lampImg = document.getElementById('lamp-pics')
console.log(lampImg)

// Aggiungo degli eventi al click del bottone
powerLampButton.addEventListener('click', function () { 
    console.log('ho cliccato sul bottone')
 
// Verifico se l'immagine ha la classe 'off' (spenta) poi di conseguenza
    if (lampImg.classList.contains('off')) {
            // lampImg.classList.remove('off') // Rimuovo la classe off
            // lampImg.classList.toggle('off')  // Se c'è la classe off, la rimuove
            lampImg.src = './img/yellow_lamp.png'  // Cambio con la seconda immagine, luce accesa
            lampImg.alt = 'lamp-is-on'  //  Cambio l'etichetta dell'immagine
            powerLampButton.innerText = 'Spegni'   // Cambio il testo all'interno dell'elemento html al click del suddetto bottone
        } else {
            // lampImg.classList.add('off')  // Riaggiungo la classe off
            // lampImg.classList.toggle('off')  // Se non c'è la classe off, la aggiunge
            lampImg.src = './img/white_lamp.png'   // Torno alla prima immagine, luce spenta
            lampImg.alt = 'lamp-is-off'   //  Cambio l'etichetta dell'immagine
            powerLampButton.innerText = 'Accendi'  // Cambio il testo all'interno dell'elemento html al click del suddetto bottone
        }
    
        lampImg.classList.toggle('off')  // E' un'azione fatta a prescindere dalla condizione, quindi può stare fuori dall'if
})


