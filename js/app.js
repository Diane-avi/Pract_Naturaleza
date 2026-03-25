function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => {
    p.classList.remove('activa');
  });

  document.getElementById(id).classList.add('activa');
}
