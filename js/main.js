/* Chantal Estilo — comportamiento básico del sitio */
document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const boton = document.querySelector(".menu-boton");
  const menu = document.querySelector(".menu");
  if (boton && menu) {
    boton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto);
    });
  }

  // Aparición suave al hacer scroll
  const elementos = document.querySelectorAll(".aparece");
  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observador.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    elementos.forEach((el) => observador.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add("visible"));
  }

  // Año actual en la despedida
  document.querySelectorAll("[data-anio]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Formulario de contacto (demostración sin servidor)
  const formulario = document.querySelector("#form-contacto");
  if (formulario) {
    formulario.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const nombre = formulario.nombre.value.trim();
      const aviso = document.querySelector(".mensaje-exito");
      if (aviso) {
        aviso.textContent = "¡Gracias, " + nombre + "! Recibimos tu mensaje y Chantal te responderá muy pronto.";
        aviso.classList.add("visible");
      }
      formulario.reset();
    });
  }
});
