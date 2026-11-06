(function () {
  "use strict";
  const S = window.SITE;

  const UI = {
    it: { progetti: "Progetti", competenze: "Competenze", formazione: "Formazione", chi: "Chi sono", contatti: "Contatti",
          cv: "Scarica il CV", indietro: "Tutti i progetti", nonTrovato: "Progetto non trovato.",
          immagine: "Immagine in arrivo", link: "Link", aggiornato: "Ultimo aggiornamento" },
    en: { progetti: "Projects", competenze: "Skills", formazione: "Education", chi: "About", contatti: "Contact",
          cv: "Download CV", indietro: "All projects", nonTrovato: "Project not found.",
          immagine: "Image coming soon", link: "Links", aggiornato: "Last updated" }
  };

  const ICON = {
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>',
    out: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>'
  };

  // ---- language: saved choice, otherwise browser language ----
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  let lang = store.get("lang") || ((navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en");
  const tr = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.it ?? "") : (v ?? "");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tags = arr => arr && arr.length ? `<ul class="etichette">${arr.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
  const pad = n => String(n).padStart(2, "0");

  function cover(src, alt) {
    if (!src) return `<div class="segnaposto">${UI[lang].immagine}</div>`;
    return `<img src="${esc(src)}" alt="${esc(alt || "")}" loading="lazy" decoding="async" data-fallback>`;
  }

  document.addEventListener("error", e => {
    const img = e.target;
    if (img.tagName === "IMG" && img.hasAttribute("data-fallback")) {
      const d = document.createElement("div");
      d.className = "segnaposto"; d.textContent = UI[lang].immagine;
      img.replaceWith(d);
    }
  }, true);

  // ---- streamlines around a body, drawn behind the hero ----
  function streamlines() {
    const W = 1200, H = 520, cx = 0.80 * W, cy = 0.5 * H, R = 120;
    let out = "";
    for (let k = -9; k <= 9; k++) {
      const y0 = cy + k * 27;
      let d = "";
      for (let x = 0; x <= W; x += 12) {
        // stream function of potential flow past a cylinder, solved for y at fixed psi
        const dx = x - cx, h = y0 - cy;
        let y = h;
        for (let i = 0; i < 6; i++) { const r2 = dx * dx + y * y; y = h / (1 - (R * R) / Math.max(r2, R * R * 1.02)); }
        y = Math.max(-H, Math.min(H, y));
        d += (x ? "L" : "M") + x + " " + (cy + y).toFixed(1);
      }
      out += `<path d="${d}"${k === 3 ? ' class="acc"' : ""}/>`;
    }
    return `<div class="flusso" aria-hidden="true"><svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice">${out}</svg></div>`;
  }

  // ---- navigation ----
  const sezioni = ["progetti", "competenze", "formazione", "chi", "contatti"];
  function renderNav() {
    const html = sezioni.map(id => `<a href="#/${id}">${UI[lang][id]}</a>`).join("");
    document.getElementById("nav").innerHTML = html;
    document.getElementById("menu-voci").innerHTML = html;
    document.querySelectorAll(".lingua button").forEach(b => b.classList.toggle("attivo", b.dataset.lang === lang));
    document.documentElement.lang = lang;
  }
  const intesta = (id, n) => `<div class="intesta"><span class="num">${pad(n)}</span><h2>${UI[lang][id]}</h2></div>`;

  // ---- home ----
  function home() {
    const sp = S.spotlight;
    return `
      <section class="apertura">
        ${streamlines()}
        <div class="apertura-testo appare">
          <span class="etichetta">${tr(S.hero.kicker)}</span>
          <h1>${esc(S.name)}</h1>
          <p class="ruolo">${tr(S.hero.role)}</p>
          <p class="intro">${tr(S.hero.intro)}</p>
          <div class="azioni">
            <a class="btn primario" href="${esc(tr(S.cv))}" download>${ICON.down}${UI[lang].cv}</a>
            <a class="btn" href="${esc(S.linkedin)}" target="_blank" rel="noopener">${ICON.out}LinkedIn</a>
            <a class="btn" href="${esc(S.github)}" target="_blank" rel="noopener">${ICON.out}GitHub</a>
            <a class="btn" href="mailto:${esc(S.email)}">Email</a>
          </div>
        </div>
        <div class="ritratto appare"><img src="${esc(S.photo)}" alt="${esc(S.name)}" decoding="async"></div>
      </section>

      ${S.keyNumbers ? `<section class="numeri appare">${S.keyNumbers.map(k => `<div class="numero"><b>${tr(k.value)}</b><span>${tr(k.label)}</span></div>`).join("")}</section>` : ""}

      ${sp ? `
      <section class="programma appare">
        <span class="kicker">${tr(sp.kicker)}</span>
        <h2>${tr(sp.title)}</h2>
        <p>${tr(sp.text)}</p>
        ${tags(sp.tags)}
        ${sp.link ? `<a class="btn" href="${esc(sp.link.href)}">${ICON.out}${tr(sp.link.label)}</a>` : ""}
      </section>` : ""}

      <section class="blocco" id="progetti">
        ${intesta("progetti", 1)}
        <div class="progetti">
          ${S.projects.map((p, i) => `
            <a class="scheda appare" href="#/p/${esc(p.id)}">
              <div class="copertina">
                ${p.metric ? `<span class="metrica">${tr(p.metric)}</span>` : ""}
                ${cover(p.cover, tr(p.title))}
              </div>
              <div class="scheda-corpo">
                <div class="riga-meta"><span class="indice">P.${pad(i + 1)}</span>${p.status ? `<span class="stato">${tr(p.status)}</span>` : ""}</div>
                <h3>${tr(p.title)}</h3>
                <p class="contesto">${tr(p.context)}</p>
                <p class="sintesi">${tr(p.summary)}</p>
                ${tags(p.tags)}
              </div>
            </a>`).join("")}
        </div>
      </section>

      <section class="blocco" id="competenze">
        ${intesta("competenze", 2)}
        <div class="competenze">
          ${S.skills.map(g => `<div class="gruppo appare"><h3>${tr(g.group)}</h3><p>${g.items.map(x => `<span>${esc(tr(x))}</span>`).join("")}</p></div>`).join("")}
        </div>
      </section>

      <section class="blocco" id="formazione">
        ${intesta("formazione", 3)}
        <div class="elenco">
          ${S.education.map(e => `
            <div class="voce appare">
              <div class="quando">${tr(e.when)}</div>
              ${e.title ? `<h3>${tr(e.title)}</h3>` : ""}
              ${e.where ? `<p>${esc(e.where)}</p>` : ""}
              ${e.note ? `<p class="contesto">${tr(e.note)}</p>` : ""}
              ${(e.lines || []).map(l => `<p>${tr(l)}</p>`).join("")}
            </div>`).join("")}
        </div>
      </section>

      <section class="blocco chi" id="chi">
        ${intesta("chi", 4)}
        <p class="appare">${tr(S.about)}</p>
      </section>

      <section class="blocco" id="contatti">
        ${intesta("contatti", 5)}
        <div class="contatti">
          <a class="contatto appare" href="mailto:${esc(S.email)}"><span>Email</span><b>${esc(S.email)}</b></a>
          <a class="contatto appare" href="${esc(S.linkedin)}" target="_blank" rel="noopener"><span>LinkedIn</span><b>${esc(S.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</b></a>
          <a class="contatto appare" href="${esc(S.github)}" target="_blank" rel="noopener"><span>GitHub</span><b>${esc(S.github.replace(/^https?:\/\//, ""))}</b></a>
        </div>
      </section>`;
  }

  // ---- project page ----
  function progetto(id) {
    const p = S.projects.find(x => x.id === id);
    if (!p) return `<section class="dettaglio"><a class="indietro" href="#/progetti">${ICON.back}${UI[lang].indietro}</a><p style="margin-top:24px">${UI[lang].nonTrovato}</p></section>`;
    document.title = `${tr(p.title)} | ${S.name}`;
    return `
      <article class="dettaglio">
        <a class="indietro" href="#/progetti">${ICON.back}${UI[lang].indietro}</a>
        <h1>${tr(p.title)}</h1>
        <p class="contesto">${tr(p.context)}${p.status ? ` · <span class="stato">${tr(p.status)}</span>` : ""}</p>
        <p class="sintesi">${tr(p.summary)}</p>
        ${tags(p.tags)}
        <div class="copertina">${p.metric ? `<span class="metrica">${tr(p.metric)}</span>` : ""}${cover(p.cover, tr(p.title))}</div>
        ${(p.sections || []).map(s => `<section class="sezione"><h2>${tr(s.h)}</h2><p>${tr(s.p)}</p></section>`).join("")}
        ${p.gallery && p.gallery.length ? `<div class="galleria">${p.gallery.map(g => `
          <figure><img src="${esc(g.src)}" alt="${esc(tr(g.caption))}" loading="lazy" data-fallback><figcaption>${tr(g.caption)}</figcaption></figure>`).join("")}</div>` : ""}
        ${p.links && p.links.length ? `<section class="sezione"><h2>${UI[lang].link}</h2><div class="azioni" style="margin-top:0">${p.links.map(l => `
          <a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${ICON.out}${tr(l.label)}</a>`).join("")}</div></section>` : ""}
      </article>`;
  }

  // ---- router ----
  function render() {
    renderNav();
    const h = location.hash.replace(/^#\/?/, "");
    const main = document.getElementById("pagina");
    document.title = `${S.name} | Aeronautical Engineering`;
    if (h.startsWith("p/")) {
      main.innerHTML = progetto(h.slice(2));
      window.scrollTo(0, 0);
    } else {
      main.innerHTML = home();
      const target = sezioni.includes(h) ? document.getElementById(h) : null;
      requestAnimationFrame(() => target ? target.scrollIntoView() : window.scrollTo(0, 0));
    }
    document.getElementById("piede").innerHTML =
      `<span>© ${new Date().getFullYear()} ${esc(S.name)}</span><span>Politecnico di Milano · ${tr({ it: "Ingegneria Aeronautica", en: "Aeronautical Engineering" })}</span>`;
    osserva();
  }

  let io;
  function osserva() {
    const els = document.querySelectorAll(".appare:not(.visto)");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("visto")); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visto"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
  }

  document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; store.set("lang", lang); render(); }));
  window.addEventListener("hashchange", render);
  const menu = document.getElementById("menu");
  document.getElementById("apri-menu").addEventListener("click", () => menu.showModal());
  document.getElementById("chiudi-menu").addEventListener("click", () => menu.close());
  document.getElementById("menu-voci").addEventListener("click", e => { if (e.target.closest("a")) menu.close(); });
  window.addEventListener("scroll", () => document.getElementById("testa").classList.toggle("ombra", scrollY > 8), { passive: true });

  render();
})();
