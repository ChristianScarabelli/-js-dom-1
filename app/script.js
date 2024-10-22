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
    
    if (lampImg.src.includes('white_lamp.png')) {  // Richiamo la variabile della foto, se include il nome della foto originaria,
            lampImg.src = '../img/yellow_lamp.png' // Cambio con la seconda immagine, luce accesa
            powerLampButton.innerText = 'Spegni'   // Cambio il testo all'interno dell'elemento html al click del suddetto bottone
        } else {
            lampImg.src = '../img/white_lamp.png'  // Torno alla prima immagine, luce spenta
            powerLampButton.innerText = 'Accendi'  // Cambio il testo all'interno dell'elemento html al click del suddetto bottone
        }
})


