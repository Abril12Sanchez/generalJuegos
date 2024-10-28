async function cargarJuegos() {
    const response = await fetch('/juegos/lista-juegos');
    const data = await response.json();
    const container = document.getElementById('juegosContainer');
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
    const response = await fetch('/reservas/reservar', { method: 'POST' });
    const data = await response.json();
    alert(data.message);
  }
  
  cargarJuegos();
  