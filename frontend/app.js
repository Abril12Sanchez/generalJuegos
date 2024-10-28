async function cargarJuegos() {
    try {
        const response = await fetch('https://generaljuegos-gateway.onrender.com/juegos/lista-juegos');
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        const data = await response.json();
        const container = document.getElementById('juegosContainer');
        container.innerHTML = ''; // Limpiar el contenedor

        data.juegos.forEach(juego => {
            const card = document.createElement('div');
            card.className = 'juego-card';
            card.innerHTML = `
                <h3>${juego.name}</h3>
                <p>${juego.description}</p>
                <button onclick="reservarJuego(${juego.id})">Reservar</button>
                <button onclick="realizarPago(${juego.id})">Pagar</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando juegos:", error);
    }
}

  
async function reservarJuego(id) {
    try {
        const response = await fetch('https://generaljuegos-gateway.onrender.com/reservas/reservar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ juegoId: id })
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error en reserva:", error);
        alert("Hubo un error al realizar la reserva.");
    }
}

async function realizarPago(id) {
    try {
        const response = await fetch('https://generaljuegos-gateway.onrender.com/pagos/pagar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ juegoId: id })
        });
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error en pago:", error);
        alert("Hubo un error al realizar el pago.");
    }
}

  
  // Cargar los juegos al iniciar
  cargarJuegos();
  