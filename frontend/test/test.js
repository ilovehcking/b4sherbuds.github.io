// RGB-Farbwerte für den Farbverlauf
let r = 255;
let g = 0;
let b = 0;

// Geschwindigkeit des Farbwechsels (in Millisekunden)
const colorChangeSpeed = 100; // Ändere die Geschwindigkeit entsprechend deiner Präferenz

// Funktion zum Ändern der Farbe der Outline
function changeOutlineColor() {
    const photo = document.getElementById('photo');
    photo.style.borderColor = `rgb(${r}, ${g}, ${b})`;

    // Farbwerte erhöhen/verringern für den Farbverlauf
    r -= 3;
    g += 2;
    b += 5;

    // Sicherstellen, dass die Farbwerte im gültigen Bereich bleiben (0-255)
    r = (r < 0) ? 255 : (r % 256);
    g = (g < 0) ? 255 : (g % 256);
    b = (b < 0) ? 255 : (b % 256);
}

// Ändere die Farbe der Outline in regelmäßigen Abständen
setInterval(changeOutlineColor, colorChangeSpeed);
