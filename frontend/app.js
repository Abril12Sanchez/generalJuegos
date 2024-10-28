async function cargarJuegos() {
    const response = await fetch('https://generaljuegos-gateway.onrender.com/juegos/lista-juegos');
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
      `;
      container.appendChild(card);
    });
  }
  
  async function reservarJuego(id) {
    const response = await fetch('https://generaljuegos-gateway.onrender.com/reservas/reservar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ juegoId: id }), // Envía el ID del juego
    });
    const data = await response.json();
    alert(data.message);
  }
  
  async function realizarPago(id) {
    const response = await fetch('https://generaljuegos-gateway.onrender.com/pagos/pagar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ juegoId: id }), // Envía el ID del juego
    });
    const data = await response.json();
    alert(data.message);
  }
  
  // Cargar los juegos al iniciar
  cargarJuegos();
  