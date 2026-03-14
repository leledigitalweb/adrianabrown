    /* ─────────────────────────────────────────
    ⚙️  EDITAR SERVICIOS AQUÍ
    Para agregar: copiá un objeto y completalo
    Para quitar:  eliminá el objeto completo
    ───────────────────────────────────────── */
    const SERVICIOS = [
    {
        nombre: "Terapia Individual",
    desc: "Espacio de escucha y acompañamiento para adultos que buscan comprender sus emociones, superar bloqueos o transitar momentos difíciles.",
    icono: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>`
      },
    {
        nombre: "Terapia de Pareja",
    desc: "Trabajo con los vínculos para mejorar la comunicación, resolver conflictos y fortalecer la relación desde un lugar de respeto mutuo.",
    icono: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>`
      },
    {
        nombre: "Terapia Familiar Sistémica",
    desc: "Abordaje de las dinámicas y conflictos familiares desde la perspectiva sistémica, trabajando con la familia como un todo interconectado.",
    icono: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>`
      },
    {
        nombre: "Pericias Psicológicas",
    desc: "Evaluaciones e informes periciales para el ámbito judicial. Más de cuatro décadas de experiencia como perito oficial del Poder Judicial de la Nación.",
    icono: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>`
      }
    ];

    /* Renderizar cards de servicios */
    const grid = document.getElementById('servicios-grid');
    SERVICIOS.forEach((s, i) => {
      const card = document.createElement('div');
    card.className = 'servicio-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
    <div class="servicio-icon">${s.icono}</div>
    <div class="servicio-nombre">${s.nombre}</div>
    <p class="servicio-desc">${s.desc}</p>
    `;
    grid.appendChild(card);
    });

    /* Animaciones al hacer scroll */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, {threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    /* Disparar las del hero inmediatamente */
    setTimeout(() => {
        document.querySelectorAll('#hero .reveal').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
